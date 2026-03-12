
const{expect}=require('@playwright/test')

exports.searchproduct=
    class searchproduct{
        constructor (page){
            this.page=page;
            this.productbtn='[href="/products"]';
            this.search='[id="search_product"]';
            this.searchbtn='[id="submit_search"]';
            this.viewsearchproduct='[class="title text-center"]';
            this.searcedproduct='[class="product-overlay"]'; // ithu vanthu search panna product ethana varum  search pandra product  based

        }
        


        async productclick(){
            await this.page.locator(this.productbtn).click();
        }

        async searchbox(item){
            await expect(this.page.locator(this.search)).toBeVisible();
            await expect(this.page.locator(this.search)).toBeEnabled();
            await expect(this.page.locator(this.search)).toBeEditable();
            await this.page.locator(this.search).fill(item);
            await this.page.locator(this.searchbtn).click();
            await expect(this.page.locator(this.viewsearchproduct)).toBeVisible();
            const count =await this.page.locator(this.searcedproduct).count();
            expect(count).toBeGreaterThanOrEqual(1);

        }
    } 


