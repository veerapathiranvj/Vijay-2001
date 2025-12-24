const { test, expect } = require('@playwright/test')
test('webtablecheck', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const table = await page.locator('//div[@id="HTML1"]');

    const columns = await table.locator('table th');
    await columns.count();
    expect(await columns.count()).toBe(4)

    const rows = await table.locator('table tr');
    await rows.count();
    expect(await rows.count()).toBe(7)


    const square = await page.locator('#productTable');

    const columnss = await square.locator('thead th');
    console.log("number of columns:", await columnss.count());
    expect(await columnss.count()).toBe(4);

    const rowss = await square.locator('tbody tr');
    console.log("number of rows:", await rowss.count());
    expect(await rowss.count()).toBe(5);
})