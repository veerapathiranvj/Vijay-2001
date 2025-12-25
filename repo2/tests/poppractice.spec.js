import { test, expect } from '@playwright/test';

test('popup practice', async ({ page }) => {

  await page.goto('https://practice-automation.com/');
  await page.click('//a[text()="Popups"]');

  // ONE dialog handler for all popup types
  page.on('dialog', async dialog => {
    const msg = dialog.message();
    console.log("Dialog message:", msg);

    // Alert dialog
    if (msg === "Hi there, pal!") {
      await dialog.accept();
    }

    // Confirm dialog
    else if (msg === "OK or Cancel, which will it be?") {
      await dialog.accept();
    }

    // Prompt dialog
    else if (msg === "Hi there, what's your name?") {
      await dialog.accept("vj");   // send text to prompt
    }

    // fallback
    else {
      await dialog.dismiss();
    }
  });

  // Trigger popups
  await page.click('#alert');
  await page.click('//b[text()="Confirm Popup"]');
  await page.click('#prompt');
});
