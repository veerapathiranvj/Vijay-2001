import { test, expect } from '@playwright/test';

test('Add medicine item - pharmacy concept', async ({ page }) => {

  await page.goto('https://demo.playwright.dev/todomvc/');

  // Assume medicine name
  await page.fill('.new-todo', 'Paracetamol 10 tablets');
  await page.keyboard.press('Enter');

  // Validation
  await expect(page.locator('.todo-list li'))
    .toHaveText('Paracetamol 10 tablets');

    await page.waitForTimeout(4000)

});
