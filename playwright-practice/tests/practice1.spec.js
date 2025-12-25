const{test,expect}=require('@playwright/test')
test('dumyweb',async({page})=>{
    await page.goto('https://practice-automation.com/form-fields/');
    await page.fill('//input[@id="name-input"]','vj');
    await page.fill('//input[@type="password"]','dummy');
    await page.locator('//label[contains(text(),"vorite drink")]');
    await expect(page.locator('//label[contains(text(),"vorite drink")]')).toBeVisible();
    await page.click('//label[@for="drink4"]')
    await page.click('//label[@for="color2"]')

 await page.locator("#automation").selectOption({label:'Yes'});
 await page.locator('#email').fill('veera@123');

 await page.fill('#message','thakyou');
 await page.waitForTimeout(4000);
 await page.click('#submit-btn');
  
  await page.on('dialog',async(dialog)=>{
    if(dialog.type()=== 'Message received!'){
        await dialog.accept('ok')
        
    }
  });
  
});