
const { test, expect } = require('@playwright/test')

test('Issue medicine with valid prescription', async ({ page }) => {

    // Login
    await page.goto('https://example-hospital-app.com/login');
    await page.fill('#email', 'pharmacy@test.com');
    await page.fill('#password', 'pharmacy123');
    await page.click('#loginBtn');

    // Open Pharmacy
    await page.click('text=Pharmacy');

    // Select Patient
    await page.selectOption('#patient', 'PATIENT001');

    // Select Prescription
    await page.selectOption('#prescription', 'RX123');

    // Issue Medicine
    await page.click('#issueMedicineBtn');

    // Validation
    await expect(page.locator('.success-message'))
        .toHaveText('Medicine issued successfully');
    await page.waitForTimeout(5000)

});
