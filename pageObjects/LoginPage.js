class LoginPage{

    constructor(page){
        this.page = page;
        this.username = page.locator("[name='name']");
        this.email = page.locator(".signup-form [name='email']");
        this.signUp = page.locator(".signup-form .btn");
        this.newUserText = page.locator(".signup-form h2");
    }

    async getNewUserText(){
        return await this.newUserText.innerText();
    }

    async userSignUp(username,email){
        await this.username.fill(username);
        await this.email.fill(email);
        await this.signUp.click();
    }

}
module.exports = {LoginPage};