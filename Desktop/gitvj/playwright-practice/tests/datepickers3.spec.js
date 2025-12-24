const{test,expect}=require('@playwright/test')
test('3rd model',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
     await page.locator('[id="comboBox"]').click();
     await page.selectOption('')
    await page.waitForTimeout(5000)

})