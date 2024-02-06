import { Page } from '@playwright/test';
import { expect } from 'playwright/test';

export class SignInPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  emailInput = () => this.page.locator('#email');
  passwordInput = () => this.page.locator('#password');
  signInButton = () => this.page.getByRole('button', { name: 'Sign in', exact: true });
  signInNavButton = () => this.page.getByText('Sign in');
  signUpButton = () => this.page.locator('a').getByText('Sign up', { exact: true });

  async verifyUserIsSignedIn() {
    await expect(this.signInNavButton()).toHaveCount(0);
    await expect(await this.page.getByTestId('account-icon').locator('a').getAttribute('href')).toBe('/account');
  }
}
