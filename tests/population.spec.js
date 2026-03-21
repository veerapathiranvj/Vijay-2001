const { test, expect } = require('@playwright/test');
test('india population', async ({ page }) => {
    await page.goto('https://www.worldometers.info/world-population/');
    const population = await page.locator('//h2[contains(text(),"Country")]//following-sibling::div//table//thead//following-sibling::tbody//tr//td[6]').allTextContents();
    console.log("india population density:", population[0]);
})