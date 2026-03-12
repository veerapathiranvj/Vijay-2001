const { expect } = require('@playwright/test')

exports.wrongpwd =
  class wrongpwd {
    constructor(page) {


      this.page = page

      this.loginbox = '[data-qa="login-email"]';
      this.passwrdbox = '[data-qa="login-password"]';
      this.loginbtn = '[data-qa="login-button"]';
      this.errormsg = '//p[text()="Your email or password is incorrect!"]'
    }

    async login(loginbox, passwrdbox) {
      await this.page.locator(this.loginbox).fill(loginbox);
      await this.page.locator(this.passwrdbox).fill(passwrdbox);
      await this.page.locator(this.loginbtn).click();
    }
    async getErrorMessage() {
      await expect(this.page.locator(this.errormsg)).toBeVisible();
    }


  }