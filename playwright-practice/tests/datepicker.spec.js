const { test, expect } = require('@playwright/test')
test('datepicker', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');


  const year = "2022";
  const month = "April";
  const date = "13";
  await page.locator('//input[@id="datepicker"]').click();

  while (true) {
    const years = await page.locator('.ui-datepicker-year').textContent();
    const months = await page.locator('.ui-datepicker-month').textContent();//text content kudukalana loop la oditu irrkum because april nu variable kuduthu irrpom athaa thedittu irrkum loop la
    if (years == year && months == month) {
      break;
    }
    await page.click("//span[@class='ui-icon ui-icon-circle-triangle-w']");
  }
  // await page.waitForTimeout(5000)

  const dates = await page.$$('//a[@class="ui-state-default"]');// multiple dates la check panni enna date kuduthu irrkom atha edukum
  for (const dt of dates) {
    if (await dt.textContent() == date) ///ithu mela kudutha  const date ku inga if la condition eluthurom 
    {
      await dt.click();
      break;
    }
  }
  await page.waitForTimeout(2000);
})