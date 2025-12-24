const{test,expect}= require('@playwright/test')
test('flipcart',async({page})=>{
    await page.goto('https://www.flipkart.com/');
    await page.locator('//img[@title="Flipkart"]')
    await expect(page.locator('//img[@title="Flipkart"]')).toBeVisible()
})