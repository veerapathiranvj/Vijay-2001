const { test, expect } = require('@playwright/test')
test('insta login', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    const username = await page.locator('[id="username"]')
    const password = await page.locator('[id="password"]');
    await expect(username).toBeEditable();
    await expect(username).toBeVisible();
    await expect(username).toBeEnabled();
    await expect(password).toBeEditable();
    await expect(password).toBeVisible();
    await expect(password).toBeEnabled();

    await username.fill('vj');
    await password.fill('veera')
    await page.click('[class="radius"]');
    await expect(page.locator('[class="flash error"]')).toBeVisible();
    await page.waitForTimeout(4000)
})


