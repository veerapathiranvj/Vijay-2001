// const {test,expect} = require ('@playwright/test')
// test('prac',async({page})=> {
//     await page.goto('https://demo.automationtesting.in/Register.html');
//     await page.fill('//input[@ng-model="FirstName"]','vijay');
//     await page.fill('//input[@ng-model="LastName"]','M');
//     await page.fill('//textarea[@ng-model="Adress"]','bagavathiamman kovil st,ckpt');
//     await page.fill('//input[@ng-model="EmailAdress"]','vj@gmail.com');
//     await page.fill('//input[@ng-model="Phone"]','9092734047');
//     //await page.fill("//a[text()='English']",'English');
//     //await page.waitForTimeout(6000);
//     await page.fill('#firstpassword','vjjj');
//     await page.fill('#secondpassword','vjjj');
//     await page.click('#submitbtn');
//     await page.waitForTimeout(6000);
//     await page.click('button#Button1');
// });  



//practice//
// const{test,expect} = require ('@playwright/test')
// test('prac',async({page})=>{
// await page.goto('https://testautomationpractice.blogspot.com/');
// await page.getByPlaceholder("Enter Name").fill('vijay');          // getbyplaceholder use panna locater la summa enter a name nu kudukanum
// await page.fill('//input[@id="email"]','vj@getMaxListeners.com');
// await page.fill('//input[@id="phone"]','9092734047');
// await page.fill('//textarea[@id="textarea"]','bagavathi amman kovil st ckpt');
// await page.click('//button[@onclick="calculateRange()"]');
// await page.waitForTimeout(10000);
// });      


//practice  tasks;

// const {test,expect}=require('@playwright/test')
// test('practice',async({page})=>{
//     await page.goto('https://www.w3schools.com/');
//     // await page.locator("//td[text()='Italy']/preceding-sibling::td[1]")
//     await page.getByPlaceholder('Search our tutorials, e.g. HTML').fill('tab');
//     await page.click('//button[@id="learntocode_searchbtn"]');
//     await page.locator("//td[text()='Italy']/preceding-sibling::td[1]");
//     await expect(page.locator("//td[text()='Italy']/preceding-sibling::td[1]")).toHaveText('Giovanni Rovelli')
//     await page.waitForTimeout(3000);
// });


//practice testing
const {test,expect}= require('@playwright/test');

test ('automation practice',async({page})=>{
    await page.goto('https://practice.expandtesting.com/bookstore');
    await expect(page).toHaveTitle('E-commerce Bookstore Example for Practicing Automated Tests');
    const tools=await page.$$('//a');
    
    await page.waitForSelector('//a[@class="nav-link p-2"]');
    const multiples=await page.$$('//a[@class="nav-link p-2"]');
    for(const multiple of multiples){
        const webelements = await multiple.textContent(); 
        console.log(webelements);
    }
    //await expect(page.locator('xpath//a[@class="nav-link p-2"]')).toBeVisible();
});
    
