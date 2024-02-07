import { Page } from '@playwright/test';

export class SignUpPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  emailInput = () => this.page.locator('#email');
  passwordInput = () => this.page.locator('#password');
  passwordConfirmInput = () => this.page.locator('#passwordConfirm');
  signUpButton = () => this.page.getByRole('button', { name: 'Sign up', exact: true });
  createAnAccountNavBtn = () => this.page.getByText('Create an account');
  signInButton = () => this.page.locator('a', { hasText: 'Sign in' });
}
