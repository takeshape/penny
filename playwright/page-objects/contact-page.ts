import { Page } from '@playwright/test';

export class ContactPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  sendButton = () => this.page.getByRole('button', { name: 'Send', exact: true });
  firstNameInput = () => this.page.locator('#firstName');
  lastNameInput = () => this.page.locator('#lastName');
  emailInput = () => this.page.locator('#email');
  messageInput = () => this.page.locator('#message');
  agreementBtn = () => this.page.getByRole('switch');
  phoneNumberInput = () => this.page.locator('#phoneNumber');
}
