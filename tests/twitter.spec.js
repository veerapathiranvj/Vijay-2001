const { test, expect } = require('@playwright/test')

test('xcreateaccount', async ({ page }) => {  // locator dynamic ah irrkum run pannum pothu check pannum 
    await page.goto('https://x.com/');
    //await page.waitForTimeout(3000);
    await page.click('//span[text()="Create account"]');
    const name = await page.locator('[maxlength="50"]');
    await expect(name).toBeEmpty();
    await expect(name).toBeEnabled();
    await expect(name).toBeEditable();

    await expect(name).toBeVisible();
    const dropdown = await page.locator('//select[@aria-labelledby="SELECTOR_1_LABEL"]//child::option//following-sibling::option');
    const totalmnth = await dropdown.count() //intha count vanthu number count pandrathukku 
    for (let i = 0; i < totalmnth; i++) { // intha locator vanthu dynamic locator check pannitu run pannanum 
        const month = await dropdown.nth(i).textContent()
        console.log('month:', month)

    }
    await page.waitForTimeout(3000)



    const days = await page.locator('//select[@aria-labelledby="SELECTOR_2_LABEL"]//following-sibling::option').count();
    //const dates = await days.count();
    await expect(days).toBe(31)
    console.log("days:", days)



    const year = await page.locator('//select[@id="SELECTOR_3"]//following-sibling::option');
    const years = await year.count();
     for (let i=0;i<years; i++){
        const yeartext= await year.nth(i).textContent()
         console.log('year:', yeartext)

     }
//     // await expect(years).toBeGreaterThan(1);
//     // console.log('year:', years) 
 })