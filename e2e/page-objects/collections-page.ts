import { Page } from '@playwright/test';

export class CollectionsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  productItems = () => this.page.getByTestId('product-item');
  getProductByName = (productName: string) => this.productItems().getByText(productName);
  collectionsDialog = () => this.page.getByTestId('collection-popup-dialog');
  collectionSection = () => this.page.getByTestId('collection-section');
  brandsSection = () => this.collectionSection().filter({ hasText: 'Brands' }).getByRole('list');
  getBrandByName = (brand: string) => this.brandsSection().getByText(brand, { exact: true });
}
