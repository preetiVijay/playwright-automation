class LoginPage{

    constructor(page){
        this.page = page;
        this.username = page.locator("[name='name']");
        this.email = page.locator(".signup-form [name='email']");
        this.signUp = page.locator(".signup-form .btn");
    }

    async goToUrl(){
        await this.page.goto("https://www.automationexercise.com/login");
        // await this.page.waitForLoadState("networkidle");
    }

    async userSignUp(username,email){
        await this.username.fill(username);
        await this.email.fill(email);
        // await this.page.pause();
        await this.page.locator(".fc-dialog.fc-choice-dialog .fc-footer-buttons .fc-button-label").first().click();
        await this.signUp.click();
    }

}
module.exports = {LoginPage};