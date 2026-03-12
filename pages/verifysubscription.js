const { expect } = require('@playwright/test')

exports.verifysubscription =
    class verifysubscription {
        constructor(page) {
            this.page = page;
            this.homepage = '[alt="Website for automation practice"]';
            this.subscription = '//h2[text()="Subscription"]';
            this.mailbox = '#susbscribe_email';
            this.mailboxbtn = '#subscribe';
            this.verifysuccessmsg = '//div[contains(text(),"successfully subscribed!")]';
        }

        async checksubscription(mailid) {
            await expect(this.page.locator(this.homepage)).toBeVisible();
            await expect(this.page.locator(this.subscription)).toHaveText('Subscription');
            await expect(this.page.locator(this.mailbox)).toBeVisible();
            await expect(this.page.locator(this.mailbox)).toBeEmpty();
            await expect(this.page.locator(this.mailbox)).toBeEnabled();
            await expect(this.page.locator(this.mailbox)).toBeEditable();
            await this.page.locator(this.mailbox).fill(mailid);
            await this.page.locator(this.mailboxbtn).click();
            await expect(this.page.locator(this.verifysuccessmsg)).toBeVisible();

        }


    } 
