import { test } from '../fixtures';
import { COLLECTIONS_PAGE_ENDPOINT, HOMEPAGE_ENDPOINT, PRODUCT_NAME } from '../constants';
import { expect } from 'playwright/test';

test.describe('Shopping cart', () => {
  test.beforeEach('Navigate to the Collections page', async ({ page }) => {
    await page.goto(HOMEPAGE_ENDPOINT);
  });

  test('Verify clicking on the cart icon opens shopping cart', async ({ shoppingCart }) => {
    await shoppingCart.cartIcon().click();
    await shoppingCart.cartDialog().waitFor();
    await expect(shoppingCart.cartDialog()).toContainText('Your cart is empty');
  });

  test('Adjust the number of items', async ({ shoppingCart, page, collectionsPage, productPage }) => {
    if (!PRODUCT_NAME) {
      test.skip(!PRODUCT_NAME, 'PLAYWRIGHT_PRODUCT_NAME was not defined');
      return;
    }

    await page.goto(COLLECTIONS_PAGE_ENDPOINT);
    await collectionsPage.getProductByName(PRODUCT_NAME).click();
    await page.getByLabel('Breadcrumb').waitFor();

    const productPrice = await productPage.productPrice().innerText();
    const convertedPrice = parseFloat(productPrice.replace('$', ''));

    await productPage.addToCartBtn().click();
    await shoppingCart.cartDialog().waitFor();
    await expect(shoppingCart.shoppingCartItems()).toHaveCount(1);
    await expect(shoppingCart.cartTotalPrice()).toContainText(productPrice);

    await shoppingCart.addItemBtn().click();
    await shoppingCart.addItemBtn().click();
    await expect(shoppingCart.cartTotalPrice()).toContainText(String(convertedPrice * 3));

    await shoppingCart.reduceItemBtn().click();
    await expect(shoppingCart.cartTotalPrice()).toContainText(String(convertedPrice * 2));
  });

  test('Remove items from the cart', async ({ shoppingCart, page, collectionsPage, productPage }) => {
    if (!PRODUCT_NAME) {
      test.skip(!PRODUCT_NAME, 'PLAYWRIGHT_PRODUCT_NAME was not defined');
      return;
    }

    await page.goto(COLLECTIONS_PAGE_ENDPOINT);
    await collectionsPage.getProductByName(PRODUCT_NAME).click();
    await page.getByLabel('Breadcrumb').waitFor();

    const productPrice = await productPage.productPrice().innerText();

    await productPage.addToCartBtn().click();
    await shoppingCart.cartDialog().waitFor();
    await expect(shoppingCart.shoppingCartItems()).toHaveCount(1);
    await expect(shoppingCart.cartTotalPrice()).toContainText(productPrice);

    await shoppingCart.removeCartItemBtn().click();
    await expect(shoppingCart.cartDialog()).toContainText('Your cart is empty');
    await expect(shoppingCart.shoppingCartItems()).toHaveCount(0);
  });
});
