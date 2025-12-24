const { test, expect } = require('@playwright/test')
test('login wrong credentiels', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('//input[@name="username"]').fill('s1tudent');
    await page.fill('//input[@id="password"]', "Password123");
    await page.click('//button[@id="submit"]');
    await page.waitForSelector('.show');
    await expect(page.locator('.show')).toBeVisible();
    //await page.click('//a[text()="Log out"]')

});
