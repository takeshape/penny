import { test } from '../fixtures';
import { HOMEPAGE_ENDPOINT } from '../constants';
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

  test('');
});
