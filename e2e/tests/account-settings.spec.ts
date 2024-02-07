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

  test('Verify navigation to the Account page via Account nav icon', async ({ accountPage }) => {
    await accountPage.openAccountSettings();
  });

  test.describe('Account / Profile', () => {
    test.beforeEach('Navigate to the Account settings', async ({ accountPage }) => {
      await accountPage.navigateToAccountPage();
    });

    test('Verify red messages appear if required fields are not filled in', async ({ page, accountPage }) => {
      await accountPage.clearAllRequiredFieldsForProfile();
      await accountPage.profileSaveBtn().click();
      await expect(page.getByText('This field is required')).toHaveCount(3);
    });

    test('Verify user can update personal information', async ({ accountPage }) => {
      const newFirstName = await accountPage.changeFirstName();
      const newLastName = await accountPage.changeLastName();
      const newPhoneNumber = await accountPage.changePhoneNumber();

      await accountPage.saveProfileUpdates();
      await accountPage.verifyInputValue({ locator: accountPage.profileFirstNameInput(), text: newFirstName });
      await accountPage.verifyInputValue({ locator: accountPage.profileLastNameInput(), text: newLastName });
      await accountPage.verifyPhoneNumberInputValue(newPhoneNumber);
    });
  });

  test.describe('Account / Shipping Address', () => {
    test.beforeEach('Navigate to the Account settings', async ({ accountPage }) => {
      await accountPage.navigateToAccountPage();
    });

    test.fixme('Verify red messages appear if required fields are not filled in', async ({ page, accountPage }) => {
      // TODO: fields should have value to clear
      await accountPage.clearAllRequiredFieldsForShipping();
      await accountPage.shippingSaveBtn().click();
      await expect(page.getByText('This field is required')).toHaveCount(5);
    });
  });
});
