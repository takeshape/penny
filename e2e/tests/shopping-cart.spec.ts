import { expect } from 'playwright/test';
import {
  COLLECTION_NAME,
  PRODUCT_COLOR_OUTOFSTOCK,
  PRODUCT_NAME_INSTOCK,
  PRODUCT_OUTOFSTOCK,
  PRODUCT_SIZE_OUTOFSTOCK
} from '../constants';
import { test } from '../fixtures';
import { getCollectionEndpoint } from '../utils';

test.describe('Shopping cart', () => {
  test.beforeEach('Navigate to the Collections page', async ({ page }) => {
    if (!COLLECTION_NAME) {
      test.skip(!COLLECTION_NAME, 'PLAYWRIGHT_COLLECTION_NAME was not defined');
      return;
    }
    await page.goto(getCollectionEndpoint());
  });

  test('User is able to add product to cart', async ({ page, collectionsPage, shoppingCart, productPage }) => {
    if (!PRODUCT_NAME_INSTOCK) {
      test.skip(!PRODUCT_NAME_INSTOCK, 'PLAYWRIGHT_PRODUCT_NAME_INSTOCK was not defined');
      return;
    }

    await collectionsPage.selectProduct(PRODUCT_NAME_INSTOCK);

    const productPrice = await productPage.productPrice().innerText();

    await productPage.addToCartBtn().click();
    await expect(page.getByText('Shopping cart')).toBeVisible();
    await expect(shoppingCart.shoppingCartItems()).toHaveCount(1);
    await expect(shoppingCart.shoppingCartItems()).toContainText(PRODUCT_NAME_INSTOCK);
    await expect(shoppingCart.cartTotalPrice()).toContainText(productPrice);
  });

  test('Checkout phase', async ({ page, shoppingCart, collectionsPage, productPage }) => {
    if (!PRODUCT_NAME_INSTOCK) {
      test.skip(!PRODUCT_NAME_INSTOCK, 'PLAYWRIGHT_PRODUCT_NAME_INSTOCK was not defined');
      return;
    }

    await collectionsPage.selectProduct(PRODUCT_NAME_INSTOCK);
    await productPage.addToCartBtn().click();
    await expect(page.getByText('Shopping cart')).toBeVisible();
    await expect(shoppingCart.shoppingCartItems()).toContainText(PRODUCT_NAME_INSTOCK);

    await page.goto('/?shopify_checkout_action=success');

    await page.waitForURL('/');
    await page.getByText('Successfully checked out').waitFor();
    await expect(shoppingCart.cartItemsCount()).toContainText('0');
  });

  test('Verify clicking on the cart icon opens shopping cart', async ({ shoppingCart }) => {
    await shoppingCart.cartIcon().click();
    await shoppingCart.cartDialog().waitFor();
    await expect(shoppingCart.cartDialog()).toContainText('Your cart is empty');
  });

  test('Adjust the number of items', async ({ shoppingCart, collectionsPage, productPage }) => {
    if (!PRODUCT_NAME_INSTOCK) {
      test.skip(!PRODUCT_NAME_INSTOCK, 'PLAYWRIGHT_PRODUCT_NAME_INSTOCK was not defined');
      return;
    }

    await collectionsPage.selectProduct(PRODUCT_NAME_INSTOCK);

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

  test('Remove items from the cart', async ({ shoppingCart, collectionsPage, productPage }) => {
    if (!PRODUCT_NAME_INSTOCK) {
      test.skip(!PRODUCT_NAME_INSTOCK, 'PLAYWRIGHT_PRODUCT_NAME_INSTOCK was not defined');
      return;
    }

    await collectionsPage.selectProduct(PRODUCT_NAME_INSTOCK);

    const productPrice = await productPage.productPrice().innerText();

    await productPage.addToCartBtn().click();
    await shoppingCart.cartDialog().waitFor();
    await expect(shoppingCart.shoppingCartItems()).toHaveCount(1);
    await expect(shoppingCart.cartTotalPrice()).toContainText(productPrice);

    await shoppingCart.removeCartItemBtn().click();
    await expect(shoppingCart.cartDialog()).toContainText('Your cart is empty');
    await expect(shoppingCart.shoppingCartItems()).toHaveCount(0);
  });

  test('Verify out of stock products cannot be added to cart', async ({ page, collectionsPage, productPage }) => {
    if (!PRODUCT_OUTOFSTOCK) {
      test.skip(!PRODUCT_OUTOFSTOCK, 'PLAYWRIGHT_PRODUCT_NAME_OUTOFSTOCK was not defined');
      return;
    }
    if (!PRODUCT_COLOR_OUTOFSTOCK) {
      test.skip(!PRODUCT_COLOR_OUTOFSTOCK, 'PLAYWRIGHT_PRODUCT_COLOR_OUTOFSTOCK was not defined');
      return;
    }
    if (!PRODUCT_SIZE_OUTOFSTOCK) {
      test.skip(!PRODUCT_SIZE_OUTOFSTOCK, 'PLAYWRIGHT_PRODUCT_SIZE_OUTOFSTOCK was not defined');
      return;
    }

    await collectionsPage.selectProduct(PRODUCT_OUTOFSTOCK);

    await productPage.colorPicker(PRODUCT_COLOR_OUTOFSTOCK).click();
    await productPage.sizePickerDisabled().getByText(PRODUCT_SIZE_OUTOFSTOCK, { exact: true }).click();

    await expect(page.getByText('Out of stock')).toBeVisible();
    await expect(productPage.addToCartBtn()).toBeDisabled();
  });
});
