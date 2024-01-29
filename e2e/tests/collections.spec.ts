import { test } from '../fixtures';
import { expect } from 'playwright/test';
import { BRAND_NAME, COLLECTION_NAME, COLLECTIONS_ENDPOINT, HOMEPAGE_ENDPOINT } from '../constants';
import { getCollectionEndpoint } from '../utils';

test.describe('Collections page', () => {
  test.beforeEach('Navigate to the home page and open collection menu', async ({ page, collectionsPage }) => {
    if (!COLLECTION_NAME) {
      test.skip(!COLLECTION_NAME, 'PLAYWRIGHT_COLLECTION_NAME was not defined');
      return;
    }

    await page.goto(HOMEPAGE_ENDPOINT);
    await page.getByTestId('nav-bar').getByRole('button', { name: COLLECTION_NAME, exact: true }).click();
    await collectionsPage.collectionsDialog().waitFor();
  });

  test('Verify user can navigate to the collection', async ({ page, collectionsPage }) => {
    await collectionsPage
      .collectionsDialog()
      .locator('a', { hasText: `Shop all ${COLLECTION_NAME}` })
      .click();
    await page.waitForURL(getCollectionEndpoint());

    await page.getByRole('heading', { name: COLLECTION_NAME, exact: true }).waitFor();
    await expect(collectionsPage.productItems()).not.toHaveCount(0);
  });

  test('Verify user can navigate to the collection by brand name', async ({ page, collectionsPage }) => {
    if (!BRAND_NAME) {
      test.skip(!BRAND_NAME, 'PLAYWRIGHT_BRAND_NAME was not defined');
      return;
    }

    await collectionsPage.brandsSection().hover();
    await collectionsPage.getBrandByName(BRAND_NAME).click();
    await page.waitForURL(COLLECTIONS_ENDPOINT + BRAND_NAME.toLowerCase());

    await page.getByRole('heading', { name: BRAND_NAME, exact: true }).waitFor();
    await expect(collectionsPage.productItems()).not.toHaveCount(0);
    for (const product of await collectionsPage.productItems().all()) {
      await expect(product).toContainText(BRAND_NAME, { ignoreCase: true });
    }
  });
});
