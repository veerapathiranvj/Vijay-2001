const{expect}=require('@playwright/test')

exports.contact =
 class contact{
    constructor(page){
          this.page = page;



          this.contact='[href="/contact_us"]';
          
          this.name='[name="name"]';
          this.mail='[name="email"]';
          this.subject='[name="subject"]';
          this.msg='[id="message"]';
          this.getintouch='//h2[text()="Get In Touch"]';
          this.file='[name="upload_file"]';
          this.submit='[name="submit"]';


    }
    
    async contactus(name,mail,subject,msg){
        await this.page.locator(this.contact).click();
         
         await this.page.locator(this.name).fill(name);
         await this.page.locator(this.mail).fill(mail);
         await this.page.locator(this.subject).fill(subject);
         await this.page.locator(this.msg).fill(msg);
         
    } 
   async errormessage () {
            await expect(this.page.locator(this.getintouch) ).toBeVisible()           //validation  laam ipdi thn pannanum  
         }                                                      // expect laam spec file thn pannanum
      
    async uploadfile(filepath){
        await this.page.setInputFiles(this.file,filepath)   //file upload pandrathu ipdiithn pannanum  inga action kudukanum 

         }                                                  // value spec file la kudukanum 
         
        async contactuss(){
            
         await this.page.locator(this.submit).click()
        }
 }



 