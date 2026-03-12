
const { expect } = require('@playwright/test') //expect inga use panna intha page la expect use pannikalam

exports.productlist =

    class productlist {
        constructor(page) {
            this.page = page;

            this.productbtn = '[href="/products"]';
            this.visible = '//div[@class="col-sm-9 padding-right"]/div/h2/following-sibling::div';
            this.viewproduct = '//a[@href="/product_details/1"]';
            this.pvisible = '//h2[text()="Blue Top"]/following-sibling::p';

        }

        async product() {
            await this.page.locator(this.productbtn).click();
        }
        async verifyvisible() {
            const count = await this.page.locator(this.visible).count();
            expect(count).toBeGreaterThanOrEqual(35);
        }
        async productt() { //function name similar ah irrka kudathu

            await this.page.locator(this.viewproduct).click()
        }
        async verifyproductvisible() {
            const count = await this.page.locator(this.pvisible).count();
            expect(count).toBeGreaterThanOrEqual(4);
        } // same function name similar ah irrka kudathu


    }  
