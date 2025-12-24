const { test, expect } = require('@playwright/test')
const { autoregister } = require('../pages/autoregister');
const { wrongpwd } = require('../pages/wrongpwd');
const { autologin } = require('../pages/autologin');
const { contact } = require('../pages/contact');
const { testcase } = require('../pages/testcase');
const { productlist } = require('../pages/productlist');
const { addtocart } = require('../pages/addtocart');
const { verifysubscription } = require('../pages/verifysubscription');
const { searchproduct } = require('../pages/searchproduct');



test('pom', async ({ page }) => {
    const signup = new autoregister(page)
    await signup.gotourl();
    await signup.register("sabari", "veerasingh777@gmail.com", "vijay", "vijay2000", "veera", "pathiran", "bagavathiamman kovilst", "tamilnadu", "tirunelveli", "627751", "909273")
    //await page.waitForTimeout(5000)

    //  //test('pom',async({page})=>{  


    const wrong = new wrongpwd(page)
    await wrong.login("veerasingh@gmail.com", "asdfg")
    await wrong.getErrorMessage()
    //await page.waitForTimeout(2000)



    const valid = new autologin(page)
    //await valid.gotourl();
    await valid.login("vj@gmail.com", "vijay2000")
    //await page.waitForTimeout(5000)




    const contactt = new contact(page)
    await contactt.contactus('vj', "vj@gmail.com", "error", "locators not properly")
    await contactt.errormessage()
    await contactt.uploadfile('tests/uploadfiles/lancer.img.jpg')
    await contactt.contactuss()






    const verifytcase = new testcase(page)
    await verifytcase.test();
    await expect(verifytcase.verifytest()).toBeVisible()  //tobevisible 1 element ku than 



    const test8 = new productlist(page)
    await test8.product();
    await test8.verifyvisible();  //multiple element ku to have() count ulla value kudukanum
    await test8.productt();
    await test8.verifyproductvisible(); 


     const test9 = new searchproduct(page)
    await test9.productclick();
    await test9.searchbox('top');



   

    const test10 = new verifysubscription(page)
    await test10.checksubscription("vj@gmail.com");


    const cartb = new addtocart(page)
    await page.waitForTimeout(5000)
    await cartb.cart();




});
