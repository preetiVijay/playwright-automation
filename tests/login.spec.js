const {test,expect} = require("@playwright/test");
const {LoginPage} = require("../pageObjects/LoginPage");

test.only('', async ({page}) =>{
    const loginPage = new LoginPage(page);
    await loginPage.goToUrl();
    await loginPage.userSignUp('veena','veena123@gmail.com');
})