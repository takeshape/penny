import { test } from '../fixtures';
import { expect } from 'playwright/test';
import {
  HOMEPAGE_ENDPOINT,
  INVALID_EMAIL,
  SIGN_IN_PAGE_ENDPOINT,
  SIGN_UP_PAGE_ENDPOINT,
  USER_EMAIL,
  USER_PASSWORD
} from '../constants';
import { getPassword, getValidEmail } from '../fake-data-generation';

test.describe('Sign in', () => {
  test.beforeEach('Navigate to the Sign in page', async ({ page, signInPage }) => {
    await page.goto(HOMEPAGE_ENDPOINT);
    await signInPage.signInNavButton().click();
    await expect(page.getByText('Sign in to your account')).toBeVisible();
    expect(page.url()).toContain(SIGN_IN_PAGE_ENDPOINT);
  });

  test('Sign in as an existing user', async ({ signInPage, page }) => {
    if (!USER_EMAIL) {
      test.skip(!USER_EMAIL, 'PLAYWRIGHT_USER_EMAIL was not defined');
      return;
    }
    if (!USER_PASSWORD) {
      test.skip(!USER_PASSWORD, 'PLAYWRIGHT_USER_PASSWORD was not defined');
      return;
    }

    await signInPage.emailInput().fill(USER_EMAIL);
    await signInPage.passwordInput().fill(USER_PASSWORD);
    await signInPage.signInButton().click();
    await page.waitForTimeout(1000);
    await page.goto(HOMEPAGE_ENDPOINT);
    await signInPage.verifyUserIsSignedIn();
  });

  test('Sign in as a non-existing user', async ({ signInPage, page }) => {
    await signInPage.emailInput().fill(getValidEmail());
    await signInPage.passwordInput().fill(getPassword());
    await signInPage.signInButton().click();
    await expect(page.getByText('Try signing in with a different account.')).toBeVisible();
  });

  test('Verify red messages appear if required fields are not filled in', async ({ signInPage, page }) => {
    await signInPage.signInButton().click();
    await expect(page.getByText('This field is required')).toHaveCount(2);
  });

  test('Verify user can navigate to the Sign up page', async ({ signInPage, page }) => {
    await expect(page.getByText("Don't have an account?")).toBeVisible();
    await signInPage.signUpButton().click();
    await page.waitForTimeout(1000);
    expect(page.url()).toContain(SIGN_UP_PAGE_ENDPOINT);
  });

  test('Verify user cannot log in with incorrect password', async ({ signInPage, page }) => {
    if (!USER_EMAIL) {
      test.skip(!USER_EMAIL, 'PLAYWRIGHT_USER_EMAIL was not defined');
      return;
    }

    await signInPage.emailInput().fill(USER_EMAIL);
    await signInPage.passwordInput().fill(getPassword());
    await signInPage.signInButton().click();
    await expect(page.getByText(`${USER_EMAIL} is in use`)).toBeVisible();
  });

  test('Verify user cannot log in with invalid email', async ({ signInPage, page }) => {
    await signInPage.emailInput().fill(INVALID_EMAIL);
    await signInPage.passwordInput().fill(getPassword());
    await signInPage.signInButton().click();
    await expect(page.getByText('Please enter a valid email')).toBeVisible();
  });
});
