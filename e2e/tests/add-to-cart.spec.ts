import { test } from '../fixtures';
import { ENDPOINTS } from '../constants/endpoints';
import { expect } from 'playwright/test';
import dayjs from 'dayjs';

test.describe('Add to cart', () => {
  const productName = process.env.PW_PRODUCT_NAME!;

  test.beforeEach('Navigate to the Collections page', async ({ page }) => {
    await page.goto(ENDPOINTS.womenCollections);
  });

  test('User is able to add product to cart', async ({ page, collectionsPage, shoppingCart, productPage }) => {
    await collectionsPage.getProductByName(productName).click();
    await expect(page.getByLabel('Breadcrumb')).toContainText(productName);

    const productPrice = await productPage.productPrice().innerText();

    await productPage.addToCartBtn().click();
    await expect(page.getByText('Shopping cart')).toBeVisible();
    await expect(shoppingCart.shoppingCartItems()).toHaveCount(1);
    await expect(shoppingCart.shoppingCartItems()).toContainText(productName);
    await expect(shoppingCart.cartTotalPrice()).toContainText(productPrice);
  });

  test.fixme('Checkout phase', async ({ page, shoppingCart, collectionsPage, productPage }) => {
    const email = 'test_email@mail.com';
    const userName = 'test';
    const address = 'Ottawa';
    const postalCode = 'K0A0A4';
    const testCard = '4242424242424242';
    const securityCode = '111';
    const expirationMonth = dayjs().format('MM');
    const expirationYear = dayjs().add(1, 'year').format('YY');
    const getFrameLocator = (field: string) => page.frameLocator(`[title="Field container for: ${field}"]`);

    await collectionsPage.getProductByName(productName).click();
    await productPage.addToCartBtn().click();
    await expect(page.getByText('Shopping cart')).toBeVisible();
    await expect(shoppingCart.shoppingCartItems()).toContainText(productName);

    await shoppingCart.checkoutBtn().click();
    await page.waitForURL('**/checkouts/**');

    await page.locator('#email').fill(email);
    await page.getByPlaceholder('First name (optional)').fill(userName);
    await page.getByPlaceholder('Last name').fill(userName);
    await page.locator('#shipping-address1').fill(address);
    await page.getByRole('listbox').waitFor();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);

    await page.getByPlaceholder('Postal code').fill(postalCode);
    await page.locator('#shipping_methods').waitFor();
    await getFrameLocator('Card number').locator('#number').fill(testCard);
    await getFrameLocator('Expiration date (MM / YY)')
      .locator('#expiry')
      .fill(expirationMonth + expirationYear);
    await getFrameLocator('Security code').locator('#verification_value').fill(securityCode);

    await page.getByRole('button', { name: 'Pay now', exact: true }).click();
    await page.waitForURL(process.env.PW_BASE_URL!);
    await page.getByText('Successfully checked out').waitFor();
    await expect(shoppingCart.cartItemsCount()).toContainText('0');
  });
});
