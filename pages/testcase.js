exports.testcase =
    class testcase {
        constructor(page) {

            this.page = page;

            this.testcases = '//a[ text()=" Test Cases"]';
            this.testcasepage = '//b[text()="Test Cases"]';


        }


        async test() {
            await this.page.locator(this.testcases).click()
        }
        verifytest() {
            return this.page.locator(this.testcasepage)
        }
    }
