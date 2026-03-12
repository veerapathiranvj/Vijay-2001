const { test, expect, chromium } = require('@playwright/test')
test('multiwindow handle', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()
    const allpages = context.pages()
    console.log("no of pages created:", allpages.length)
    await page1.waitForTimeout(4000);


    await page1.goto('https://the-internet.herokuapp.com/login');
    // await expect(page1.locator('//h1[@class="title"]')).toBeVisible()
    // await expect(page1).toHaveTitle('Automation Testing Practice');

    const username = await page1.locator('[id="username"]')
    const password = await page1.locator('[id="password"]');
    await expect(username).toBeEditable();
    await expect(username).toBeVisible();
    await expect(username).toBeEnabled();
    await expect(password).toBeEditable();
    await expect(password).toBeVisible();
    await expect(password).toBeEnabled();

    await username.fill('vj');
    await password.fill('veera');
    await page1.click('[class="radius"]');
    await expect(page1.locator('[class="flash error"]')).toBeVisible();
    await page1.waitForTimeout(4000);

    await page2.goto('https://automationexercise.com/');
    await expect(page2).toHaveTitle('Automation Exercise')

})