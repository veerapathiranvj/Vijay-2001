exports.autoregister =
    class autoregister {
        constructor(page) {
            this.page = page;
            this.registerlink = '[class="fa fa-lock"]';
            this.name = '[data-qa="signup-name"]';
            this.pwrd = '[data-qa="signup-email"]';
            this.signup = '[data-qa="signup-button"]';
            this.radio = '[id="id_gender1"]';
            this.profilename = '[id="name"]';
            this.profilepwrd = '[id="password"]';
            this.dobdate = '[id="days"]';
            this.dobmnth = '[id="months"]';
            this.dobyear = '[id="years"]';
            this.fname = '[id="first_name"]';
            this.lname = '[id="last_name"]';
            this.address = '[id="address1"]';
            this.country = '[id="country"]';
            this.state = '[id="state"]';
            this.city = '[id="city"]';
            this.zipcode = '[id="zipcode"]';
            this.mobile = '[data-qa="mobile_number"]'
            this.create = '//button[text()="Create Account"]';
            this.continue = '[data-qa="continue-button"]';
            this.delete = '[class="fa fa-trash-o"]';
            this.accdelete = '//a[text()="Continue"]';
            this.loginv = '[href="/login"]';

        }
        async gotourl() {
            await this.page.goto('https://automationexercise.com/login');

        }

        async register(name, pwrd, profilename, profilepwrd, fname, lname, address, state, city, zipcode, mobile) {         //fill pandra option ku muttum parameters pass panna pothum

            await this.page.locator(this.registerlink).click();                                            // click option ku  venam parameters vendam 
            await this.page.locator(this.name).fill(name);
            await this.page.locator(this.pwrd).fill(pwrd);
            await this.page.locator(this.signup).click();
            await this.page.locator(this.radio).click();
            await this.page.locator(this.profilename).fill(profilename);
            await this.page.locator(this.profilepwrd).fill(profilepwrd);
            await this.page.locator(this.dobdate).selectOption('3');
            await this.page.locator(this.dobmnth).selectOption('March');
            await this.page.locator(this.dobyear).selectOption('2002');
            await this.page.locator(this.fname).fill(fname);
            await this.page.locator(this.lname).fill(lname);
            await this.page.locator(this.address).fill(address);
            await this.page.locator(this.country).selectOption('India');
            await this.page.locator(this.state).fill(state);
            await this.page.locator(this.city).fill(city);
            await this.page.locator(this.zipcode).fill(zipcode);
            await this.page.locator(this.mobile).fill(mobile);
            await this.page.locator(this.create).click();
            await this.page.locator(this.continue).click();
            await this.page.locator(this.delete).click();
            await this.page.locator(this.accdelete).click();
            await this.page.locator(this.loginv).click();


        }

    }