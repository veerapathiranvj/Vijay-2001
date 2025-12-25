import{test,expect} from "@playwright/test"
test('upload',async({page})=>{
    await page.goto('http://qa-automation-practice.netlify.app/file-upload.html');
    await expect(page.locator('//h2[text()="File Upload Example"]')).toHaveText('File Upload Example') 
}) //tohave text ku ull expect pandra text kudukanum 