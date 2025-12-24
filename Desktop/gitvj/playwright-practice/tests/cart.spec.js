const{test,expect}=require('@playwright/test')
const{autologin}= require('../pages/autologin');

const{addtocart}=require('../pages/addtocart');


test('cartpage',async({page})=>{
    


    const valid = new autologin(page)
 await valid.gotourl();
await valid.login("vj@gmail.com","vijay2000")
//await page.waitForTimeout(5000)





const cartb = new addtocart(page)
    //await cartb.gotourl();
    await cartb.cart();


})