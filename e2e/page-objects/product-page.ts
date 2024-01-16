import { Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  addToCartBtn = () => this.page.getByRole('button', { name: 'Add to cart', exact: true });
  productPrice = () => this.page.getByTestId('product-price');
}
