import { test, expect } from '@playwright/test';
//const{test,expect} = require('@playwright/test')

//import { test, expect } from '@playwright/test';
test('popup practice', async ({ page }) => {
  await page.goto('https://practice-automation.com/');
  await page.click('//a[text()="Popups"]')

  await page.on('dialog', async (dialog) => {
    if (dialog.type() === "alert") {
      await dialog.accept()

    }
  })
  await page.click('#alert');
  // await page.waitForTimeout(3000)


  await page.on('dialog', async (dialog) => {
    if (dialog.type() === "confirm") {
      await dialog.accept();
    }//else{
    //     await dialog.dismiss('dismiss')
    // }   
  })

  await page.click('//b[text()="Confirm Popup"]');
  // await page.waitForTimeout(3000)


  await page.on('dialog', async (dialog) => {
    if (dialog.type() === "prompt") {
      await dialog.accept('vj')
    }
    // else{
    //   await dialog.dismiss()
    // }
  })
  await page.click('#prompt');
  //await page.waitForTimeout(3000)


});