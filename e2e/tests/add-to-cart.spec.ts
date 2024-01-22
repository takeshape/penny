import { expect } from 'playwright/test';
import { COLLECTION_NAME, COLLECTIONS_ENDPOINT, PRODUCT_NAME } from '../constants';
import { test } from '../fixtures';

test.describe('Add to cart', () => {
  test.beforeEach('Navigate to the Collections page', async ({ page }) => {
    test.skip(!COLLECTION_NAME, 'PLAYWRIGHT_COLLECTION_NAME was not defined');

    await page.goto(COLLECTIONS_ENDPOINT + COLLECTION_NAME);
  });

  test('User is able to add product to cart', async ({ page, collectionsPage, shoppingCart, productPage }) => {
    if (!PRODUCT_NAME) {
      test.skip(!PRODUCT_NAME, 'PLAYWRIGHT_PRODUCT_NAME was not defined');
      return;
    }

    await collectionsPage.getProductByName(PRODUCT_NAME).click();
    await expect(page.getByLabel('Breadcrumb')).toContainText(PRODUCT_NAME);

    const productPrice = await productPage.productPrice().innerText();

    await productPage.addToCartBtn().click();
    await expect(page.getByText('Shopping cart')).toBeVisible();
    await expect(shoppingCart.shoppingCartItems()).toHaveCount(1);
    await expect(shoppingCart.shoppingCartItems()).toContainText(PRODUCT_NAME);
    await expect(shoppingCart.cartTotalPrice()).toContainText(productPrice);
  });

  test('Checkout phase', async ({ page, shoppingCart, collectionsPage, productPage }) => {
    if (!PRODUCT_NAME) {
      test.skip(!PRODUCT_NAME, 'PLAYWRIGHT_PRODUCT_NAME was not defined');
      return;
    }

    await collectionsPage.getProductByName(PRODUCT_NAME).click();
    await productPage.addToCartBtn().click();
    await expect(page.getByText('Shopping cart')).toBeVisible();
    await expect(shoppingCart.shoppingCartItems()).toContainText(PRODUCT_NAME);

    await page.goto('/?shopify_checkout_action=success');

    await page.waitForURL('/');
    await page.getByText('Successfully checked out').waitFor();
    await expect(shoppingCart.cartItemsCount()).toContainText('0');
  });
});
