const { test, expect } = require('@playwright/test')
test('bus booking', async ({ page }) => {

    await page.goto('https://www.redbus.in/');
    await expect(page.locator('//span[text()="Bus tickets"]')).toBeVisible();
    await page.click('//span[text()="Bus tickets"]');
    await page.fill('#txtSource', "chennai");
    await page.fill('#txtDestination', "tenkasi");


    const year = "Jan 2026";

    const date = "11";

    await page.click('#txtOnwardCalendar');

    while (true) {
        const years = await page.locator('.calwid__year-month').textContent();
        // const months=await page.locator('.calwid__year-month').textContent();

        if (years == year) {
            break;
        }
        await page.click('.calwid__btn-next-month');
    }
    // await page.locator('//span[text()="11"]').click();

    const dates = await page.$$('.calwid__day  ');
    for (const dt of dates) {
        if (await dt.textContent() == date) {
            await dt.click();
            break;
        }
    }
    await page.dblclick('//button[text()="Search Buses"]');
    //await expect (page.locator("//a[text()='Bookings']")).toBeVisible()
    await page.waitForTimeout(5000);


})