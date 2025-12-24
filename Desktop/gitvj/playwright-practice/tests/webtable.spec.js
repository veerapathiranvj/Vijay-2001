const { test, expect } = require('@playwright/test')
test('webtable', async ({ page }) => {

    await page.goto('https://vinothqaacademy.com/webtable/');

    const table = await page.locator('//table[@id="myTable"]');

    const columns = await table.locator('thead th');
    console.log("number of columns:", await columns.count());
    expect(await columns.count()).toBe(6)


    const rows = await table.locator('tbody tr')
    console.log("number of rows:", await rows.count());
    expect(await rows.count()).toBe(10);

    //await page.$$('//input[@type="checkbox"]').click()
    // await page.locator('table input[type="checkbox"]').nth(4).check();
    // await page.locator('table input[type="checkbox"]').nth(5).check();
    // await page.locator('table input[type="checkbox"]').nth(6).check();
    // const checked = await page.locator('table input[type="checkbox"]');
    // await expect(checked).toBeChecked();
    // await page.waitForTimeout(4000); 
     
        const checkbox =  page.locator('table input[type="checkbox"]');
        const count = await checkbox.count()  //multiple value irruntha count kandippa kudukanum
    for(let i=0; i < count; i++ ){
        await checkbox.nth(i).check();
        await expect( checkbox.nth(i)).toBeChecked();
        await expect(checkbox.nth(i)).toBeTruthy();
        await checkbox.nth(i).uncheck(); //variable ah locator ah use pannom na direct ah ipdi use pannanum page.locator use panna kudathu
        await expect(checkbox.nth(i)).not.toBeChecked(); //uncheck pannitu unchecked ah irrka nu pakka not tobe checked thn kudukanum
        
    }   
    await page.waitForTimeout(4000)
    
})