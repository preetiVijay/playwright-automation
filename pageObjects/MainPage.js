class MainPage{

    constructor(page){
        this.page = page;
        this.signUpButton = page.locator("div.shop-menu ul.nav li:nth-child(4) a");
    }

    async gotToUrl(){
        await this.page.goto("https://automationexercise.com/");
        await this.page.locator(".fc-dialog.fc-choice-dialog .fc-footer-buttons .fc-button-label").first().click();
    }

    async getPageTitle(){
        return await this.page.title();
    }

    async clickOnSignUpButton(){
        await this.signUpButton.click();
    }


}
module.exports = {MainPage}