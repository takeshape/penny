import { test } from '../fixtures';
import { expect } from 'playwright/test';
import { USER_EMAIL, USER_PASSWORD } from '../constants';
import { getPassword } from '../fake-data-generation';

test.describe('Account settings', () => {
  test.beforeEach('Sign in', async ({ signInPage }) => {
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

  test('Verify navigation to the Account page via account nav icon', async ({ accountPage }) => {
    await accountPage.openAccountSettings();
  });

  test('Sign Out', async ({ accountPage }) => {
    await accountPage.navigateToAccountPage();
    await accountPage.signOut();
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
      const newFirstName = await accountPage.changeProfileFirstName();
      const newLastName = await accountPage.changeProfileLastName();
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

    test('Verify red messages appear if required fields are not filled in', async ({ page, accountPage }) => {
      await accountPage.clearAllRequiredFieldsForShipping();
      await accountPage.shippingSaveBtn().click();
      await expect(page.getByText('This field is required')).toHaveCount(5);
    });

    // BUG: https://app.shortcut.com/takeshape/story/12729/shipping-address-data-are-not-saved-after-refreshing
    test.skip('Verify user can update shipping address', async ({ page, accountPage }) => {
      let firstName: string;
      let lastName: string;
      let address: string;
      let city: string;
      let postalCode: string;
      let country: string;
      let state: string;

      await test.step('Update required fields', async () => {
        firstName = await accountPage.changeShippingFirstName();
        lastName = await accountPage.changeShippingLastName();
        address = await accountPage.changeShippingAddress1();
        city = await accountPage.changeShippingCity();
        postalCode = await accountPage.changeShippingPostalCode();
      });

      await test.step('Update selection fields', async () => {
        country = await accountPage.selectRandomCountry();
        state = await accountPage.selectRandomState();
      });

      await test.step('Save and verify changes', async () => {
        await accountPage.saveShippingUpdates();
        // BUG: Data are not saved after reloading, see link above
        await page.reload();
        await page.waitForLoadState('domcontentloaded');
        await accountPage.verifyShippingChangesSaved({
          firstName,
          lastName,
          address,
          city,
          postalCode,
          country,
          state
        });
      });
    });
  });

  test.describe('Password', () => {
    test.beforeEach('Navigate to the Password account setting', async ({ accountPage }) => {
      await accountPage.navigateToAccountPage();
      await accountPage.openPasswordSetting();
    });

    test('Verify red messages appear if required fields are not filled in', async ({ accountPage, page }) => {
      await accountPage.passwordSaveBtn().click();
      await expect(page.getByText('This field is required')).toHaveCount(2);
    });

    test('Enter different values in "New Password" and "Confirm New Password"', async ({ accountPage, page }) => {
      await accountPage.newPasswordInput().fill(getPassword());
      await accountPage.confirmNewPasswordInput().fill('passworddoesntmatch');
      await accountPage.passwordSaveBtn().click();
      await expect(page.getByText('The passwords do not match')).toBeVisible();
    });

    // TODO: need to register a new user for it
    test.fixme('Verify the password can be changed successfully', async ({ accountPage, signInPage, page }) => {
      const newPassword = getPassword();

      await test.step('Change password and sign in', async () => {
        if (!USER_EMAIL) {
          test.skip(!USER_EMAIL, 'PLAYWRIGHT_USER_EMAIL was not defined');
          return;
        }

        await accountPage.newPasswordInput().fill(newPassword);
        await accountPage.confirmNewPasswordInput().fill(newPassword);
        await accountPage.saveNewPassword();

        await signInPage.signIn({ email: USER_EMAIL, password: newPassword });
      });

      await test.step('Change the password back and sign in', async () => {
        if (!USER_PASSWORD) {
          test.skip(!USER_PASSWORD, 'PLAYWRIGHT_USER_PASSWORD was not defined');
          return;
        }
        if (!USER_EMAIL) {
          test.skip(!USER_EMAIL, 'PLAYWRIGHT_USER_EMAIL was not defined');
          return;
        }

        await accountPage.navigateToAccountPage();
        await accountPage.openPasswordSetting();

        await accountPage.newPasswordInput().fill(USER_PASSWORD);
        await accountPage.confirmNewPasswordInput().fill(USER_PASSWORD);
        await accountPage.saveNewPassword();

        await signInPage.signIn({ email: USER_EMAIL, password: USER_PASSWORD });
      });
    });
  });
});
