import { test } from '../fixtures';
import { expect } from 'playwright/test';
import { HOMEPAGE_ENDPOINT, INVALID_EMAIL, SIGN_IN_PAGE_ENDPOINT, SIGN_UP_PAGE_ENDPOINT } from '../constants';
import { getPassword, getValidEmail } from '../fake-data-generation';

test.describe('Registration form', () => {
  test.beforeEach('Navigate to the Sign up page', async ({ page, signUpPage }) => {
    await page.goto(HOMEPAGE_ENDPOINT);
    await signUpPage.createAnAccountNavBtn().click();
    await expect(page.getByText('Create your account')).toBeVisible();
    expect(page.url()).toContain(SIGN_UP_PAGE_ENDPOINT);
  });

  test('Verify red messages appear if required fields are not filled in', async ({ page, signUpPage }) => {
    await signUpPage.signUpButton().click();
    await expect(page.getByText('This field is required')).toHaveCount(3);
  });

  test('Cannot register a new user using invalid email', async ({ page, signUpPage }) => {
    const password = getPassword();

    await signUpPage.emailInput().fill(INVALID_EMAIL);
    await signUpPage.passwordInput().fill(password);
    await signUpPage.passwordConfirmInput().fill(password);
    await signUpPage.signUpButton().click();
    await expect(page.getByText('Please enter a valid email')).toBeVisible();
  });

  test("Cannot register a new user if passwords don't match", async ({ page, signUpPage }) => {
    await signUpPage.emailInput().fill(getValidEmail());
    await signUpPage.passwordInput().fill(getPassword());
    await signUpPage.passwordConfirmInput().fill('passworddoesntmatch');
    await signUpPage.signUpButton().click();
    await expect(page.getByText('The passwords do not match')).toBeVisible();
  });

  test('Verify user can navigate to the Sign In page', async ({ page, signUpPage }) => {
    await expect(page.getByText('Already have an account?')).toBeVisible();
    await signUpPage.signInButton().click();
    await page.waitForTimeout(1000);
    expect(page.url()).toContain(SIGN_IN_PAGE_ENDPOINT);
  });
});
