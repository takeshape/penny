import { siteCopyrightText } from '@/config';
import { expect, test } from '@playwright/test';
import { HOMEPAGE_ENDPOINT } from '../constants';

test.describe('Homepage', () => {
  test('Should load the homepage', async ({ page }) => {
    await page.goto(HOMEPAGE_ENDPOINT);
    await expect(page.getByTestId('nav-bar')).toBeVisible();
    await expect(page.getByText(siteCopyrightText)).toBeVisible();
  });
});
