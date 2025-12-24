import { test, expect } from '@playwright/test'
test.skip('file upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForSelector('//button[text()="Upload Single File"]');
    await page.click('//button[text()="Upload Single File"]');
    await expect(page.locator('#singleFileStatus')).toBeVisible();
    await page.locator('#singleFileInput').setInputFiles('tests/uploadfiles/lancer.img.jpg');  //slash crt ah use pannanum
    await page.waitForTimeout(5000)
});



test.only('multiplefiles', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//button[text()="Upload Multiple Files"]').click();
    await expect( page.locator('[id="multipleFilesStatus"]')).toHaveText('No files selected.'); //tohave text ku ulla  enna expect pandrom oh atha fill pannanum
    await page.locator('#multipleFilesInput').setInputFiles(['tests/uploadfiles/lancer.img.jpg',
        'tests/uploadfiles/pajero.img.jpg'])     //relative path copy pannanum multiple files la array bracket use pannanum

    await page.waitForTimeout(5000)


}); 