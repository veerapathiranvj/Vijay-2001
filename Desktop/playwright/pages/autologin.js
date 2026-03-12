exports.autologin =
    class autologin {
        constructor(page) {
            this.page = page;

            this.loginbox = '[data-qa="login-email"]';
            this.passwrdbox = '[data-qa="login-password"]';
            this.loginbtn = '[data-qa="login-button"]';
            this.logout = '[href="/logout"]';

        }
        // async gotourl() {
        //     await this.page.goto('https://automationexercise.com/login');






        // }

        async login(loginbox, passwrdbox) {
            await this.page.locator(this.loginbox).fill(loginbox);
            await this.page.locator(this.passwrdbox).fill(passwrdbox);
            await this.page.locator(this.loginbtn).click();
            await this.page.locator(this.logout).click();

        }
    }   