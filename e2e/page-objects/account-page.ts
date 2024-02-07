import { Page } from '@playwright/test';
import { expect } from 'playwright/test';
import { ACCOUNT_PAGE_ENDPOINT } from '../constants';

export class AccountPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  accountNavIcon = () => this.page.getByTestId('account-icon');
  accountNavigation = () => this.page.getByTestId('account-navigation');

  async openAccountSettings() {
    const navigationItems = ['Account', 'Password', 'Purchases', 'Subscriptions', 'Rewards', 'Sign Out'];

    await this.accountNavIcon().click();
    for (const item of navigationItems) {
      await expect(this.accountNavigation().getByText(item)).toBeVisible();
    }
    expect(this.page.url()).toContain(ACCOUNT_PAGE_ENDPOINT);
  }
}
