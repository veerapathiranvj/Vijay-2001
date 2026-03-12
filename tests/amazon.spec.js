const{test,expect}=require('@playwright/test')
test('search file verify',async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.locator('[id="twotabsearchtextbox"]').fill('sunglass')
    await page.click('[type="submit"]')
    await page.waitForSelector('[class="a-section aok-relative s-image-tall-aspect"]')
     const search=await page.locator('[class="a-section aok-relative s-image-tall-aspect"]').count()
     expect(search).toBeGreaterThanOrEqual(69);
    await page.waitForTimeout(5000)
}) // dynamic ithu eppo run pannalum manual ah check pannitu locator crt ah irrkutha nu paathuttu run pannanum