import { test, expect } from '@playwright/test'
test('dragmove', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const move = await page.locator('[id="draggable"]');     // move pandrathu source nu solluvom
    const drop = await page.locator('[id="droppable"]');      //move pandra place drop nu solluvom
    await move.dragTo(drop)                                 // ithu  easy  method  one line thn 



    //another method

    // await dragg.hover()
    // await page.mouse.down()

    // await drop.hover()
    // await page.mouse.up()

    await page.waitForTimeout(4000)

})
