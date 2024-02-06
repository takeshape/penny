import { Page } from '@playwright/test';
import { expect } from 'playwright/test';
import { HOMEPAGE_ENDPOINT, SIGN_IN_PAGE_ENDPOINT } from '../constants';

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

  async signIn({ email, password }: { email: string; password: string }) {
    await this.page.goto(SIGN_IN_PAGE_ENDPOINT);
    await this.emailInput().fill(email);
    await this.passwordInput().fill(password);
    await this.signInButton().click();

    /* TODO: Clicking the Sign In button triggers another URL to load, it's impossible to use page.waitForLoadState() for a new page.
        Remove the timeout and page.goto() when bug's fixed.
        BUG: https://app.shortcut.com/takeshape/story/12693/sign-in-and-sign-out-redirects-to-the-localhost
    */
    await this.page.waitForTimeout(2000);
    await this.page.goto(HOMEPAGE_ENDPOINT);
    await this.verifyUserIsSignedIn();
  }
}
