import { Page } from '@playwright/test';

export class CollectionsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  productItems = () => this.page.getByTestId('product-item');
  getProductByName = (productName: string) => this.productItems().getByText(productName);
}
