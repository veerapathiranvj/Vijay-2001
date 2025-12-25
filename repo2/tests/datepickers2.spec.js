const {test,expect}=require('@playwright/test')
test('date 2',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    // const year="2026";
    // const month="January";
     const date="12";
    await page.click('//input[@name="SelectedDate"]')
    
    await page.locator('[class="ui-datepicker-year"]').selectOption('2026');
    await page.locator('[class="ui-datepicker-month"]').selectOption('Jun');

    const dates=await page.$$('.ui-state-default');
    for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click();
            break;
        }
    
    }
    // await page.click('//a[text()="12"]');
    await page.waitForTimeout(6000)
})