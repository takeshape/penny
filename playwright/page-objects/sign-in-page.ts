import { Page } from '@playwright/test';
import { expect } from 'playwright/test';
import { ACCOUNT_PAGE_ENDPOINT, HOMEPAGE_ENDPOINT, SIGN_IN_PAGE_ENDPOINT } from '../constants';

export class SignInPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  emailInput = () => this.page.locator('#email');
  passwordInput = () => this.page.locator('#password');
  signInButton = () => this.page.getByRole('button', { name: 'Sign in', exact: true });
  signInNavButton = () => this.page.getByText('Sign in');
  signUpButton = () => this.page.getByRole('link').getByText('Sign up', { exact: true });

  async verifyUserIsSignedIn() {
    await expect(this.signInNavButton()).toHaveCount(0);
    await expect(this.page.getByTestId('account-icon').getByRole('link')).toHaveAttribute(
      'href',
      ACCOUNT_PAGE_ENDPOINT
    );
  }

  async signIn({ email, password }: { email: string; password: string }) {
    await this.page.goto(SIGN_IN_PAGE_ENDPOINT);
    await this.emailInput().fill(email);
    await this.passwordInput().fill(password);
    await this.signInButton().click();
    await this.page.waitForTimeout(2000);
    await this.page.goto(HOMEPAGE_ENDPOINT);
    await this.verifyUserIsSignedIn();
  }
}
