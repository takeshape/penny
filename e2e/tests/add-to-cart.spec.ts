const assert = require('assert');
import { expect } from 'playwright/test';
import { BASE_URL, PRODUCT_NAME, WOMEN_COLLECTIONS_ENDPOINT } from '../constants';
import { test } from '../fixtures';

test.describe('Add to cart', () => {
  test.beforeEach('Navigate to the Collections page', async ({ page }) => {
    await page.goto(WOMEN_COLLECTIONS_ENDPOINT);
  });

  test('User is able to add product to cart', async ({ page, collectionsPage, shoppingCart, productPage }) => {
    if (!PRODUCT_NAME) {
      assert(PRODUCT_NAME, 'PRODUCT_NAME must be defined');
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
      assert(PRODUCT_NAME, 'PRODUCT_NAME must be defined');
    }

    if (!BASE_URL) {
      assert(BASE_URL, 'BASE_URL must be defined');
    }

    await collectionsPage.getProductByName(PRODUCT_NAME).click();
    await productPage.addToCartBtn().click();
    await expect(page.getByText('Shopping cart')).toBeVisible();
    await expect(shoppingCart.shoppingCartItems()).toContainText(PRODUCT_NAME);

    await page.goto('/?shopify_checkout_action=success');

    await page.waitForURL(BASE_URL);
    await page.getByText('Successfully checked out').waitFor();
    await expect(shoppingCart.cartItemsCount()).toContainText('0');
  });
});
