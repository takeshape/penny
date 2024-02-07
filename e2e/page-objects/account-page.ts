import { Locator, Page } from '@playwright/test';
import { expect } from 'playwright/test';
import { ACCOUNT_PAGE_ENDPOINT } from '../constants';
import { getUserFirstName, getUserLastName, getUserPhoneNumber, getValidPhoneNumber } from '../fake-data-generation';

export class AccountPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  accountNavIcon = () => this.page.getByTestId('account-icon');
  accountNavigation = () => this.page.getByTestId('account-navigation');
  accountForm = () => this.page.getByTestId('account-form');
  profileSection = () =>
    this.accountForm().filter({ has: this.page.getByRole('heading', { name: 'Profile', exact: true }) });
  shippingAddressSection = () =>
    this.accountForm().filter({ has: this.page.getByRole('heading', { name: 'Shipping Address', exact: true }) });
  profileFirstNameInput = () => this.profileSection().getByLabel('First name');
  profileLastNameInput = () => this.profileSection().getByLabel('Last name');
  profileEmailInput = () => this.profileSection().getByLabel('Email address');
  profilePhoneNumberInput = () => this.profileSection().getByLabel('Phone number');
  profileSaveBtn = () => this.profileSection().getByRole('button', { name: 'Save', exact: true });
  shippingFirstNameInput = () => this.shippingAddressSection().getByLabel('First name');
  shippingLastNameInput = () => this.shippingAddressSection().getByLabel('Last name');
  shippingCompanyInput = () => this.shippingAddressSection().getByLabel('Company');
  shippingCountryInput = () => this.shippingAddressSection().getByLabel('Country');
  shippingAddress1Input = () => this.shippingAddressSection().getByLabel('Address line 1');
  shippingCityInput = () => this.shippingAddressSection().getByLabel('City');
  shippingStateInput = () => this.shippingAddressSection().getByLabel('State');
  shippingZipCodeInput = () => this.shippingAddressSection().getByLabel('ZIP / Postal code');
  shippingSaveBtn = () => this.shippingAddressSection().getByRole('button', { name: 'Save', exact: true });
  savedMessage = () => this.page.getByTestId('information-saved');

  async openAccountSettings() {
    const navigationItems = ['Account', 'Password', 'Purchases', 'Subscriptions', 'Rewards', 'Sign Out'];

    await this.accountNavIcon().click();
    for (const item of navigationItems) {
      await expect(this.accountNavigation().getByText(item)).toBeVisible();
    }
    await expect(this.page.url()).toContain(ACCOUNT_PAGE_ENDPOINT);
  }

  async navigateToAccountPage() {
    await this.page.goto(ACCOUNT_PAGE_ENDPOINT);
    await expect(this.profileSection()).toBeVisible();
    await expect(this.page.url()).toContain(ACCOUNT_PAGE_ENDPOINT);
  }

  async clearAllRequiredFieldsForProfile() {
    await this.profileFirstNameInput().clear();
    await this.profileLastNameInput().clear();
    await this.profileEmailInput().clear();
  }

  async verifyInputValue({ locator, text }: { locator: Locator; text: string }) {
    await expect(locator).toHaveValue(text);
  }

  async verifyPhoneNumberInputValue(text: string) {
    const inputValue = await this.profilePhoneNumberInput().getAttribute('value');
    if (inputValue) {
      await expect(text).toBe(inputValue.replace(/\D/g, ''));
    }
  }

  async changeFirstName(firstName = getUserFirstName()) {
    await this.profileFirstNameInput().clear();
    await this.profileFirstNameInput().fill(firstName);
    await this.verifyInputValue({ locator: this.profileFirstNameInput(), text: firstName });
    return firstName;
  }

  async changeLastName(lastName = getUserLastName()) {
    await this.profileLastNameInput().clear();
    await this.profileLastNameInput().fill(lastName);
    await this.verifyInputValue({ locator: this.profileLastNameInput(), text: lastName });
    return lastName;
  }

  async changePhoneNumber(phoneNumber = getUserPhoneNumber()) {
    await this.profilePhoneNumberInput().clear();
    await this.profilePhoneNumberInput().fill(phoneNumber);
    await this.verifyPhoneNumberInputValue(phoneNumber);
    return phoneNumber;
  }

  async saveProfileUpdates() {
    await this.profileSaveBtn().click();
    await this.savedMessage().waitFor();
  }

  async clearAllRequiredFieldsForShipping() {
    await this.shippingFirstNameInput().clear();
    await this.shippingLastNameInput().clear();
    await this.shippingAddress1Input().clear();
    await this.shippingCityInput().clear();
    await this.shippingZipCodeInput().clear();
  }
}
