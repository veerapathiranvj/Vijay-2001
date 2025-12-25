const { test, expect } = require('@playwright/test');
test('checkbox', async ({ page }) => {
    await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox');
    const checkboxes = ['//label[@for="id_checkboxes_0"]', '//input[@id="id_checkboxes_1"]', '//label[@for="id_checkboxes_2"]']
    for (const locators of checkboxes) {
        await page.locator(locators).check()
        await expect(page.locator(locators)).toBeChecked()     //for loop ku ull variable irrunthuchu na atha loop ku ulla than call pannanum
        await expect(page.locator(locators)).toBeTruthy()
    }
    // await page.locator('//input[@id="id_checkboxes_1"]').uncheck();
    // await expect(page.locator('//input[@id="id_checkboxes_1"]')).toBeTruthy();
    for (const b of checkboxes) {
        await page.locator(b).uncheck();
        await expect(page.locator(b)).toBeTruthy()
    }

    await page.waitForTimeout(5000)
})