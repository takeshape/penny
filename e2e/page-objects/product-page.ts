import { Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  addToCartBtn = () => this.page.getByRole('button', { name: 'Add to cart', exact: true });
  productPrice = () => this.page.getByTestId('product-price');
  colorPicker = (color: string) => this.page.getByRole('radio', { name: color });
  sizePickerDisabled = () => this.page.getByTestId('size-picker-disabled');
  sizePickerEnabled = () => this.page.getByTestId('size-picker-enabled');
}
