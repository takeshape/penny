import { test } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Give a gift' }).click();
  });
});
