const{test,expect}=require('@playwright/test')
test('demoorder',async({page})=>{
    await page.goto('https://sauce-demo.myshopify.com/');
    await page.click('//a[text()="Log In"]');
    await page.fill('#customer_email',"veera123@gmail.com");
    await page.fill('//input[@id="customer_password"]',"Vijay");
    await page.locator('//a[text()="Forgot your password?"]');
    await expect(page.locator('//a[text()="Forgot your password?"]')).toBeVisible();
    await page.click('//input[@value="Sign In"]');

   // await page.locator('//div[@class="errors"]');
   // await expect(page.locator('//div[@class="errors"]')).toBeVisible();
await page.click('//h3[text()="Striped top"]')
    // await page.locator('//label[@for="product-select-option-0"]').selectOption('L');
    // await page.locator('//label[text()="Color"]').selectOption('Red');
    await page.click('//input[@id="add"]');

})