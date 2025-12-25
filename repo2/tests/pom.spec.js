 const{test,expect} = require('@playwright/test'); 
 import {homepage} from '../pages/homepage';

//const{homepage}=require('../pages/homepage')

test('pom',async({page})=>{
const home = new homepage(page);
await home.gotourl();
await home.addproduct('Blue Top');
await page.waitForTimeout(2000);
await home.goTocart();

})
//homepage
