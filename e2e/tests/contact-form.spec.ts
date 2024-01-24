import { test } from '../fixtures';
import { expect } from 'playwright/test';
import { CONTACT_PAGE_ENDPOINT } from '../constants';

test.describe('Contact form', () => {
  test.beforeEach('Navigate to the Contact page', async ({ page }) => {
    await page.goto(CONTACT_PAGE_ENDPOINT);
    await page.getByText('Get in touch').waitFor();
  });

  test('Verify red messages appear if required fields are not filled in', async ({ page, contactPage }) => {
    await contactPage.agreementBtn().click();
    await expect(contactPage.sendButton()).not.toBeDisabled();

    await contactPage.sendButton().click();
    await expect(page.getByText('This field is required')).toHaveCount(4);
  });

  test('Verify user is unable to submit the form with invalid email', async ({ contactPage }) => {});
});
