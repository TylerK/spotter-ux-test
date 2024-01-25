import { test, expect } from '@playwright/test';

// Replace the below test with your tests.
test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});
