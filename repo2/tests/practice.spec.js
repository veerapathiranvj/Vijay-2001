const { test, expect } = require('@playwright/test');
//const { watchFile } = require('node:fs');
test('test1', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('//input[@id="name"]').fill('vj')
  await page.locator('//input[@id="email"]').fill('vj123@gmail.com');
  await page.locator('//input[@id="phone"]').fill('909273');
  await page.locator('//textarea[@id="textarea"]').fill('bagavathiammankovil, st');
  const radiobtn = await page.locator('//label[@for="male"]');
  await radiobtn.check();
  await page.locator('//input[@id="wednesday"]').click();
  await expect(await page.locator('//input[@id="wednesday"]')).toBeChecked();
  //await page.waitForTimeout(5000);
  await page.locator('#country').selectOption("japan");   //id value use panni value kudukanum
  //await page.waitForTimeout(5000);
  await page.locator('(//table[@id="productTable"]//td//input)[4]').click();
  await expect(page.locator('(//table[@id="productTable"]//td//input)[4]')).toBeChecked();
  await page.waitForTimeout(3000)

  await page.locator('(//table[@id="productTable"]//td//input)[5]').check()
  await expect(page.locator('(//table[@id="productTable"]//td//input)[5]')).toBeChecked();
  await page.locator('(//table[@id="productTable"]//td//input)[5]').uncheck();
  await page.waitForTimeout(3000);
  
  //scrolling dropdown
  await page.waitForSelector('[id="comboBox"]')
  await page.locator('[id="comboBox"]').fill('Item 100');
  //mouse hover
  const mouse = await page.locator('[class="dropbtn"]')
  await mouse.hover();
  await page.mouse.up()
  await page.waitForTimeout(5000)

})
