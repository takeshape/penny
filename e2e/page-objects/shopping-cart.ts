import { Page } from '@playwright/test';

export class ShoppingCart {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  shoppingCartItems = () => this.page.getByTestId('cart-item');
  cartTotalPrice = () => this.page.locator('p:has-text("Subtotal") + p');
  checkoutBtn = () => this.page.getByRole('button', { name: 'Checkout', exact: true });
  cartItemsCount = () => this.page.getByTestId('cart-items-count');
  cartIcon = () => this.page.getByTestId('cart-icon');
  cartDialog = () => this.page.getByTestId('cart-dialog');
  addItemBtn = () => this.page.getByTestId('plus-icon');
  reduceItemBtn = () => this.page.getByTestId('minus-icon');
  removeCartItemBtn = () => this.page.getByRole('button', { name: 'Remove', exact: true });
}
