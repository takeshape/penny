import { Page } from '@playwright/test';
import { expect } from 'playwright/test';

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
  writeAReviewBtn = () => this.page.getByRole('button', { name: 'Write a review', exact: true });
  reviewDialog = () => this.page.getByTestId('review-dialog');
  reviewTextarea = () => this.page.locator('#review');
  submitAReviewBtn = () => this.page.getByRole('button', { name: 'Submit', exact: true });
  starRating = () => this.page.locator('#starRating');

  async clickOnWriteAReviewBtn() {
    await expect(this.writeAReviewBtn()).toBeVisible();
    await this.writeAReviewBtn().click();
    await this.reviewDialog().waitFor();
  }

  async setAStarRating(stars: number) {
    const starElement = this.starRating()
      .locator('svg')
      .nth(stars - 1);

    await starElement.click();
    await expect(starElement).toHaveClass(/text-yellow-400/);
  }
}
