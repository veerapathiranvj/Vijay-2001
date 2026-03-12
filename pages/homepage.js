
exports.homepage =
    class homepage {
        constructor(page) {
            this.page = page;

            this.products = '//div[@class="product-overlay"]';
            this.view = '//a[@href="/product_details/1"]';
            this.addtocartbtn = '//button[@class="btn btn-default cart"]';
            this.cart = '.product-overlay a[href="/view_cart"]';
        };
        async gotourl() {
            await this.page.goto('https:automationexercise.com')
        }
        async addproduct(productname) {
            const products = await this.page.$$(this.products);

            for (const product of products) {
                console.log(product.textContent())
                if (productname === await product.textContent()) {
                    await product.click();
                    break;
                }
            }
        }
        async addtocartbtn() {
            await this.page.locator(this.addtocartbtn).click();
        }

        async goTocart() {
            await this.page.getByRole('link', { name: 'Cart' }).click();
        }
    };
