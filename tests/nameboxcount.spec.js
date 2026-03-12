const { test, expect } = require('@playwright/test');

test('nameboxcounting', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const count = await page.locator('[id="name"]');
    for (let i = 0; i < 200; i++) {
        await count.type('v')
    }
    await page.waitForTimeout(10000)
})
