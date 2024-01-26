import { test } from '../fixtures';
import { expect } from 'playwright/test';
import {
  CONTACT_PAGE_ENDPOINT,
  INVALID_EMAIL,
  INVALID_PHONE_NUMBER,
  MESSAGE,
  USER_NAME,
  VALID_EMAIL,
  VALID_PHONE_NUMBER
} from '../constants';

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

  test('Verify user is unable to submit the form with invalid email', async ({ contactPage, page }) => {
    await contactPage.emailInput().fill(INVALID_EMAIL);
    await contactPage.sendButton().click({ force: true });
    await expect(page.getByText('Please enter a valid email')).toBeVisible();
  });

  test('Verify user is unable to submit the form with invalid phone number', async ({ contactPage, page }) => {
    await contactPage.phoneNumberInput().fill(INVALID_PHONE_NUMBER);
    await contactPage.sendButton().click({ force: true });
    await expect(page.getByText('Please enter a valid phone number')).toBeVisible();
  });

  // BUG: https://app.shortcut.com/takeshape/story/12647/recaptcha-has-not-been-loaded-error-occurs-after-submitting-the-contact-form
  test.fixme('Submit a contact form', async ({ contactPage, page }) => {
    await contactPage.firstNameInput().fill(USER_NAME);
    await contactPage.lastNameInput().fill(USER_NAME);
    await contactPage.emailInput().fill(VALID_EMAIL);
    await contactPage.phoneNumberInput().fill(VALID_PHONE_NUMBER);
    await contactPage.messageInput().fill(MESSAGE);

    await contactPage.agreementBtn().click();
    await expect(contactPage.sendButton()).not.toBeDisabled();
    await contactPage.sendButton().click();
    await page.getByRole('button', { name: 'Submitting...', exact: true }).waitFor({ state: 'detached' });
    await page.getByText('Thank you for reaching out! Created ticket').waitFor();
  });
});
