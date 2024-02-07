import { test } from '../fixtures';
import { expect } from 'playwright/test';
import { HOMEPAGE_ENDPOINT, INVALID_EMAIL, USER_PASSWORD, VALID_EMAIL } from '../constants';

test.describe('Create an account', () => {
  test.beforeEach('Navigate to the sign up page', async ({ page }) => {
    await page.goto(HOMEPAGE_ENDPOINT);
    await page.getByText('Create an account').click();
    await expect(page.getByText('Create your account')).toBeVisible();
    expect(page.url()).toContain('auth/create');
  });

  test('Verify red messages appear if required fields are not filled in', async ({ page, signUpPage }) => {
    await signUpPage.signUpButton().click();
    await expect(page.getByText('This field is required')).toHaveCount(3);
  });

  test('Cannot register a new user using invalid email', async ({ page, signUpPage }) => {
    await signUpPage.emailInput().fill(INVALID_EMAIL);
    await signUpPage.passwordInput().fill(USER_PASSWORD);
    await signUpPage.passwordConfirmInput().fill(USER_PASSWORD);
    await signUpPage.signUpButton().click();
    await expect(page.getByText('Please enter a valid email')).toBeVisible();
  });

  test("Cannot register a new user if passwords don't match", async ({ page, signUpPage }) => {
    await signUpPage.emailInput().fill(VALID_EMAIL);
    await signUpPage.passwordInput().fill(USER_PASSWORD);
    await signUpPage.passwordConfirmInput().fill('passworddoesntmatch');
    await signUpPage.signUpButton().click();
    await expect(page.getByText('The passwords do not match')).toBeVisible();
  });
});
