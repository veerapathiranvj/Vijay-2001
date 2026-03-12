const { test, expect } = require('@playwright/test')
const testdata = require("../test-data/login.json");
test('json vachu pannurom', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await page.locator('[data-qa="login-email"]').fill(testdata.name);
    await page.locator('[data-qa="login-password"]').fill(testdata.pwd);
    await page.locator('[data-qa="login-button"]').click()
    await page.click('[href="/logout"]');
})