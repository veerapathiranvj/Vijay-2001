exports.example=
 class example{
    constructor(page){
        this.page=page;
        this.vijay=''
        this.abi=''
    }
    async function(name){
        await this.page.locator(this.vijay).click();
        await this.page.locator(this.abi).fill(name)
    }
 }