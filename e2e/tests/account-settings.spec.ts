import { test } from '../fixtures';
import { expect } from 'playwright/test';
import { USER_EMAIL, USER_PASSWORD } from '../constants';

test.describe('Account settings', () => {
  test.beforeEach('Sign in', async ({ signInPage, page, collectionsPage }) => {
    if (!USER_EMAIL) {
      test.skip(!USER_EMAIL, 'PLAYWRIGHT_USER_EMAIL was not defined');
      return;
    }
    if (!USER_PASSWORD) {
      test.skip(!USER_PASSWORD, 'PLAYWRIGHT_USER_PASSWORD was not defined');
      return;
    }

    await signInPage.signIn({ email: USER_EMAIL, password: USER_PASSWORD });
  });

  test('Verify navigation to the Account page', async ({ accountPage }) => {
    await accountPage.openAccountSettings();
  });

  test.describe('Account/Profile', () => {});
});
