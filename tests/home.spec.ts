import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  await expect(page).toHaveTitle(/Youtube/i);
});


test('homepage loads', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  await expect(page).toHaveTitle(/Youtube/i);
});