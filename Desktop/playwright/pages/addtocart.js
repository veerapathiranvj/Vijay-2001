const { expect } = require('@playwright/test');
exports.addtocart =
  class addtocart {
    constructor(page) {
      this.page = page;
      this.pimage = '[src="/get_product_picture/1"]';
      this.addtocartbtn = '[data-product-id="1"]';

      this.continue = '[class="btn btn-success close-modal btn-block"]';
      this.viewproduct = '[href="/product_details/2"]';
      this.add2 = '[class="btn btn-default cart"]';
      //  this.addtocartbtn2='[class="btn btn-default cart"]';
      this.continue2 = '[class="btn btn-success close-modal btn-block"]';
      this.cartbtn = '//a[text()=" Cart"]';
      this.verifycartproduct = '[class="cart_product"]';
      this.verifycartprice = '[class="cart_price"]';
      this.verifycartquantity = '[class="cart_quantity"]';
      this.checkout = '//a[text()="Proceed To Checkout"]';
      //this.verifytotal=''
    }

    //          async gotourl(){
    //         await this.page.goto('https://automationexercise.com/login');

    //     }

    async cart() {
      await this.page.locator(this.pimage).hover();
      await this.page.locator(this.addtocartbtn).first().click();

      await this.page.locator(this.continue).click();
      //await this.page.waitForTimeout(5000)
      await this.page.locator(this.viewproduct).click()

      await this.page.locator(this.add2).click();
      await this.page.locator(this.continue2).click();
      await this.page.locator(this.cartbtn).click();
      const products = this.page.locator(this.verifycartproduct);
      await expect(products).toHaveCount(2);
      const verifycartprice = (this.page.locator(this.verifycartprice));
      await expect(verifycartprice).toHaveCount(2);
      const verifycartquantity = (this.page.locator(this.verifycartquantity));
      await expect(verifycartquantity).toHaveCount(2);

      for (let i = 0; i < 2; i++) {
        await expect(products.nth(i)).toBeVisible();
        await expect(verifycartprice.nth(i)).toBeVisible();
        await expect(verifycartquantity.nth(i)).toBeVisible();

      }
      await this.page.locator(this.checkout).click();




    }
  }