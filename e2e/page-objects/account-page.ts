import { Locator, Page } from '@playwright/test';
import { expect } from 'playwright/test';
import { ACCOUNT_PAGE_ENDPOINT, HOMEPAGE_ENDPOINT, SIGN_IN_PAGE_ENDPOINT } from '../constants';
import {
  getCity,
  getPostalCode,
  getShippingAddress,
  getUserFirstName,
  getUserLastName,
  getUserPhoneNumber
} from '../fake-data-generation';
import { getRandomValueFromArray } from '../utils';

export class AccountPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  accountNavIcon = () => this.page.getByTestId('account-icon');
  accountNavigation = () => this.page.getByTestId('account-navigation');
  getNavigationItem = (item: string) => this.accountNavigation().getByText(item, { exact: true });
  accountForm = () => this.page.getByTestId('account-form');
  profileSection = () =>
    this.accountForm().filter({ has: this.page.getByRole('heading', { name: 'Profile', exact: true }) });
  shippingAddressSection = () =>
    this.accountForm().filter({ has: this.page.getByRole('heading', { name: 'Shipping Address', exact: true }) });
  passwordSection = () =>
    this.accountForm().filter({ has: this.page.getByRole('heading', { name: 'New Password', exact: true }) });
  profileFirstNameInput = () => this.profileSection().getByLabel('First name');
  profileLastNameInput = () => this.profileSection().getByLabel('Last name');
  profileEmailInput = () => this.profileSection().getByLabel('Email address');
  profilePhoneNumberInput = () => this.profileSection().getByLabel('Phone number');
  profileSaveBtn = () => this.profileSection().getByRole('button', { name: 'Save', exact: true });
  shippingFirstNameInput = () => this.shippingAddressSection().locator('#firstName');
  shippingLastNameInput = () => this.shippingAddressSection().locator('#lastName');
  shippingCountrySelect = () => this.shippingAddressSection().locator('#country');
  shippingAddress1Input = () => this.shippingAddressSection().locator('#address1');
  shippingCityInput = () => this.shippingAddressSection().locator('#city');
  shippingStateSelect = () => this.shippingAddressSection().locator('#province');
  shippingZipCodeInput = () => this.shippingAddressSection().locator('#postalCode');
  shippingSaveBtn = () => this.shippingAddressSection().getByRole('button', { name: 'Save', exact: true });
  savedMessage = () => this.page.getByTestId('information-saved');
  passwordSaveBtn = () => this.passwordSection().getByRole('button', { name: 'Save', exact: true });
  newPasswordInput = () => this.passwordSection().getByLabel('New Password', { exact: true });
  confirmNewPasswordInput = () => this.passwordSection().getByLabel('Confirm New Password', { exact: true });
  signOutButton = () => this.getNavigationItem('Sign Out');

  async openAccountSettings() {
    const navigationItems = ['Account', 'Password', 'Purchases', 'Subscriptions', 'Rewards', 'Sign Out'];

    await this.accountNavIcon().click();
    for (const item of navigationItems) {
      await expect(this.getNavigationItem(item)).toBeVisible();
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
    } else {
      throw new Error('Value is not defined.');
    }
  }

  async updateFieldAndVerifyValue({ locator, text }: { locator: Locator; text: string }) {
    await locator.clear();
    await locator.fill(text);
    await this.verifyInputValue({ locator, text });
  }

  async changeProfileFirstName(firstName = getUserFirstName()) {
    await this.updateFieldAndVerifyValue({ locator: this.profileFirstNameInput(), text: firstName });
    return firstName;
  }

  async changeProfileLastName(lastName = getUserLastName()) {
    await this.updateFieldAndVerifyValue({ locator: this.profileLastNameInput(), text: lastName });
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

  async changeShippingFirstName(firstName = getUserFirstName()) {
    await this.updateFieldAndVerifyValue({ locator: this.shippingFirstNameInput(), text: firstName });
    return firstName;
  }

  async changeShippingLastName(lastName = getUserLastName()) {
    await this.updateFieldAndVerifyValue({ locator: this.shippingLastNameInput(), text: lastName });
    return lastName;
  }

  async changeShippingAddress1(address = getShippingAddress()) {
    await this.updateFieldAndVerifyValue({ locator: this.shippingAddress1Input(), text: address });
    return address;
  }

  async changeShippingPostalCode(code = getPostalCode()) {
    await this.updateFieldAndVerifyValue({ locator: this.shippingZipCodeInput(), text: code });
    return code;
  }

  async changeShippingCity(city = getCity()) {
    await this.updateFieldAndVerifyValue({ locator: this.shippingCityInput(), text: city });
    return city;
  }

  async saveShippingUpdates() {
    await this.shippingSaveBtn().click();
    await this.savedMessage().waitFor();
  }

  async verifyShippingChangesSaved({
    firstName,
    lastName,
    address,
    city,
    postalCode,
    country,
    state
  }: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    state: string;
  }) {
    const shippingRequiredFields = [
      { locator: this.shippingFirstNameInput(), value: firstName },
      { locator: this.shippingLastNameInput(), value: lastName },
      { locator: this.shippingAddress1Input(), value: address },
      { locator: this.shippingCityInput(), value: city },
      { locator: this.shippingZipCodeInput(), value: postalCode },
      { locator: this.shippingCountrySelect(), value: country },
      { locator: this.shippingStateSelect(), value: state }
    ];

    for (const field of shippingRequiredFields) {
      await this.verifyInputValue({ locator: field.locator, text: field.value });
    }
  }

  async selectRandomOption(locator: Locator) {
    const allOptions = await locator.getByRole('option').allTextContents();
    const option = getRandomValueFromArray(allOptions);

    await locator.selectOption(option);
    await this.page.waitForTimeout(1000); // wait for selection done

    return option;
  }

  async selectRandomCountry() {
    const countries = await this.shippingCountrySelect().getByRole('option').allTextContents();
    const currentCountry = await this.shippingCountrySelect().inputValue();
    const otherOptions: string[] = [];

    for (const value of countries) {
      if (value === currentCountry) continue;
      otherOptions.push(value);
    }

    const country = getRandomValueFromArray(otherOptions);
    await this.shippingCountrySelect().selectOption(country);
    await this.verifyInputValue({ locator: this.shippingCountrySelect(), text: country });
    await this.page.waitForLoadState('domcontentloaded'); // wait for State options to load
    return country;
  }

  async selectRandomState() {
    const state = await this.selectRandomOption(this.shippingStateSelect());
    await this.verifyInputValue({ locator: this.shippingStateSelect(), text: state });
    return state;
  }

  async openPasswordSetting() {
    await this.getNavigationItem('Password').click();
    await this.passwordSection().waitFor();
  }

  async verifyUserIsSignedOut() {
    await expect(this.page.getByText('Sign in', { exact: true })).toBeVisible();
    await expect(this.accountNavIcon().getByRole('link')).toHaveAttribute('href', `/api${SIGN_IN_PAGE_ENDPOINT}`);
  }

  async signOut() {
    await this.signOutButton().click();

    /* TODO: Clicking the Sign Out button triggers another URL to load, it's impossible to use page.waitForLoadState() for a new page.
    Remove the timeout and page.goto() when bug's fixed.
    BUG: https://app.shortcut.com/takeshape/story/12693/sign-in-and-sign-out-redirects-to-the-localhost
    */
    await this.page.waitForTimeout(2000);
    await this.page.goto(HOMEPAGE_ENDPOINT);
    await this.verifyUserIsSignedOut();
  }

  async saveNewPassword() {
    await this.passwordSaveBtn().click();
    await this.page.waitForURL(`**${SIGN_IN_PAGE_ENDPOINT}`);
  }
}
