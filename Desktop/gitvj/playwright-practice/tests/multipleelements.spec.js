const {test,expect}=require ('@playwright/test');
test('multipleelements',async({page}) => {
    await page.goto('https://demoblaze.com/');
    

    await page.waitForSelector('.card-text');
    const products = await page.$$('.card-text');
    for(const product of products){
        const pricename=await product.textContent();
        console.log(pricename);
    }
  await page.waitForTimeout(2000);
});



// test('Multipleelements',async({page}) => {

//     await page.goto('https://automationexercise.com/');
//     const Prices= await page.$$('//div[@class="col-sm-4"]//div[2]//h2');
//     for(const price of Prices){
//         const pricelist= await price.textContent();
//         console.log(pricelist);
//     }
// });