const { test, expect } = require('@playwright/test')
test('dropdown', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    //     await page.waitForSelector('[id="comboBox"]')
    //     await page.locator('[id="comboBox"]').fill('Item 100');

    //    const mouse= await page.locator('[class="dropbtn"]')
    //    await mouse.hover();
    //    await page.mouse.up()
    //     await page.waitForTimeout(5000)
    await page.locator('[id="userEmail"]').fill('veera1234@gmail.com');
    await page.locator('[id="userPassword"]').fill('Vijay@2000');
    await page.click('[class="btn btn-block login-btn"]');

    const checkbox =  await page.locator('[type="checkbox"]').allInnerTexts()
    //const count = await checkbox.count()
    console.log(checkbox)
   // console.log(checkbox.first.locator('[type="checkbox"]').textContent()
    // for (let i=0;i<count;i++) 
    //     {
        
    //      //expect(page.locato(cb)).toBe(21);
    //      const data1 = checkbox.nth(i).locator('[type="checkbox"]').textContent()
    //      console.log(data1)
    // }


})