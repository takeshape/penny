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
  reviewItem = () => this.page.getByTestId('review-item');

  async clickOnWriteAReviewBtn() {
    await expect(this.writeAReviewBtn()).toBeVisible();
    await this.writeAReviewBtn().click();
    await this.reviewDialog().waitFor();
  }

  async setStarRating(stars: number) {
    const starElement = this.starRating()
      .locator('svg')
      .nth(stars - 1);

    await starElement.click();
    await expect(starElement).toHaveClass(/text-yellow-400/);
  }

  async submitAReview() {
    await this.submitAReviewBtn().click();
    await this.page.getByText('Review submitted successfully').waitFor();
    await this.page.getByRole('button', { name: 'Done', exact: true }).click();
    await this.reviewDialog().waitFor({ state: 'detached' });
  }

  async verifyLastProductReview({ message, stars }: { message: string; stars: number }) {
    await expect(this.reviewItem().first()).toContainText(message);
    await expect(
      this.reviewItem()
        .first()
        .locator('svg')
        .nth(stars - 1)
    ).toHaveClass(/text-yellow-400/);
    await expect(this.reviewItem().first().locator('svg').nth(stars)).toHaveClass(/text-gray-300/);
  }
}
