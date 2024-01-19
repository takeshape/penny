import { expect, test } from '@playwright/test';
import { HOMEPAGE_ENDPOINT } from '../constants';

test.describe('Homepage', () => {
  test('Should load the homepage', async ({ page }) => {
    await page.goto(HOMEPAGE_ENDPOINT);
    await expect(page.getByRole('link', { name: 'Give a gift' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Free returns' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign up for our newsletter' })).toBeVisible();
    await expect(page.getByTestId('nav-bar')).toBeVisible();
  });
});
