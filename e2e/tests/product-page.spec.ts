import { test } from '../fixtures';
import { expect } from 'playwright/test';
import { getCollectionEndpoint } from '../utils';
import { COLLECTION_NAME, PRODUCT_COLOR_INSTOCK, PRODUCT_NAME_INSTOCK, PRODUCT_SIZE_INSTOCK } from '../constants';

test.describe('Product page', () => {
  test.beforeEach('Navigate to the product', async ({ page, productPage, collectionsPage }) => {
    if (!COLLECTION_NAME) {
      test.skip(!COLLECTION_NAME, 'PLAYWRIGHT_COLLECTION_NAME was not defined');
      return;
    }
    if (!PRODUCT_NAME_INSTOCK) {
      test.skip(!PRODUCT_NAME_INSTOCK, 'PLAYWRIGHT_PRODUCT_NAME_INSTOCK was not defined');
      return;
    }

    await page.goto(getCollectionEndpoint());
    await collectionsPage.selectProduct(PRODUCT_NAME_INSTOCK);
  });

  test('Select product color and size and verify they displayed properly in the shopping cart', async ({
    productPage,
    shoppingCart
  }) => {
    if (!PRODUCT_COLOR_INSTOCK) {
      test.skip(!PRODUCT_COLOR_INSTOCK, 'PLAYWRIGHT_PRODUCT_COLOR_INSTOCK was not defined');
      return;
    }
    if (!PRODUCT_SIZE_INSTOCK) {
      test.skip(!PRODUCT_SIZE_INSTOCK, 'PLAYWRIGHT_PRODUCT_SIZE_INSTOCK was not defined');
      return;
    }

    await productPage.colorPicker(PRODUCT_COLOR_INSTOCK).click();
    await productPage.sizePickerEnabled().getByText(PRODUCT_SIZE_INSTOCK, { exact: true }).click();
    await expect(productPage.addToCartBtn()).not.toBeDisabled();
    await productPage.addToCartBtn().click();
    await shoppingCart.cartDialog().waitFor();
    await expect(shoppingCart.shoppingCartItems()).toContainText(`${PRODUCT_COLOR_INSTOCK} / ${PRODUCT_SIZE_INSTOCK}`);
  });
});
