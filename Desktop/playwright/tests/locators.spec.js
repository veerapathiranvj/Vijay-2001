
const {test,expect}=require('@playwright/test')

test('locator',async({page})=>{ 
    
    await page.goto('https://practicetestautomation.com/practice-test-login/'); 

    //click on login button
    await page.waitForTimeout(2000);
   // await page.click('');

    await page.fill('//input[@id="username"]',"student");
    await page.fill('//input[@id="password"]',"Password123");
    await page.click('//button[text()="Submit"]');
    await page.waitForTimeout(3000);
    await page.locator('//a[text()="Log out"]');
    await page.click('//a[text()="Log out"]');
    //const logout= await page.locator('//a[text()="Log out"]')
   // await expect(logout).toBeVisible();       // logout click panni main page ku vanthurum aprom logout irrkathu so error varum
    

    });