import { test } from '../fixtures';
import { expect } from 'playwright/test';
import { BRAND_NAME, COLLECTION_NAME, HOMEPAGE_ENDPOINT, PRODUCT_NAME } from '../constants';
import { getRandomString } from '../fake-data-generation';

test.describe('Search functionality', () => {
  test.beforeEach('Navigate to the home page', async ({ page }) => {
    await page.goto(HOMEPAGE_ENDPOINT);
  });

  test('Search by product name', async ({ page }) => {
    if (!PRODUCT_NAME) {
      test.skip(!PRODUCT_NAME, 'PLAYWRIGHT_PRODUCT_NAME was not defined');
      return;
    }

    await page.getByTestId('search-icon').click();
    await page.getByPlaceholder('Search...').waitFor();
    await page.getByPlaceholder('Search...').fill(PRODUCT_NAME);
    await page.getByRole('listbox').waitFor();
    await expect(page.getByRole('listbox')).toContainText(PRODUCT_NAME);
  });

  test('Search by brand name', async ({ page }) => {
    if (!BRAND_NAME) {
      test.skip(!BRAND_NAME, 'PLAYWRIGHT_BRAND_NAME was not defined');
      return;
    }

    await page.getByTestId('search-icon').click();
    await page.getByPlaceholder('Search...').waitFor();
    await page.getByPlaceholder('Search...').fill(BRAND_NAME);
    await page.getByRole('listbox').waitFor();

    const searchResults = await page.getByRole('listbox').locator('li').all();
    for (const item of searchResults) {
      await expect(item).toContainText(BRAND_NAME, { ignoreCase: true });
    }
  });

  test('Search by collection name', async ({ page }) => {
    if (!COLLECTION_NAME) {
      test.skip(!COLLECTION_NAME, 'PLAYWRIGHT_COLLECTION_NAME was not defined');
      return;
    }

    await page.getByTestId('search-icon').click();
    await page.getByPlaceholder('Search...').waitFor();
    await page.getByPlaceholder('Search...').fill(COLLECTION_NAME);
    await page.getByRole('listbox').waitFor();
    await expect(page.getByRole('listbox').locator('li')).not.toHaveCount(0);
  });

  test('Search by invalid parameter', async ({ page }) => {
    await page.getByTestId('search-icon').click();
    await page.getByPlaceholder('Search...').waitFor();
    await page.getByPlaceholder('Search...').fill(getRandomString());
    await expect(page.getByText('No results found')).toBeVisible();
  });
});
