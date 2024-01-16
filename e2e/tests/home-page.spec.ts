import { test, expect } from '@playwright/test';
import { ENDPOINTS } from '../constants/endpoints';

test.describe('Homepage', () => {
  test('Should load the homepage', async ({ page }) => {
    await page.goto(ENDPOINTS.homePage);
    await expect(page.getByRole('link', { name: 'Give a gift' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Free returns' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign up for our newsletter' })).toBeVisible();
    await expect(page.getByTestId('nav-bar')).toBeVisible();
  });
});
