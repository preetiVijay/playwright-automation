const {test,expect} = require("@playwright/test");
const {LoginPage} = require("../pageObjects/LoginPage");
const {SignUpPage} = require("../pageObjects/SignUpPage");
const { MainPage } = require("../pageObjects/MainPage");


test('Test Case 1 - Register User', async ({page}) =>{
    const mainPage = new MainPage(page);
    await mainPage.gotToUrl();
    expect(await mainPage.getPageTitle()).toContain('Automation Exercise');
    await mainPage.clickOnSignUpButton();

    const loginPage = new LoginPage(page);
    expect(await loginPage.getNewUserText()).toContain("New User Signup!");
    const dummyNumber = (Math.random() * 1000).toFixed(0).toString();
    const userEmailID = 'veena' + dummyNumber + '@gmail.com';
    // console.log(userEmailID);
    await loginPage.userSignUp('veena',userEmailID);
    
    const signUpPage = new SignUpPage(page);
    expect(await signUpPage.getaccountDetailsTitle()).toContain("ENTER ACCOUNT INFORMATION");
    await expect(page.locator('#name')).toHaveValue('veena');
    await expect(page.locator('#email')).toHaveValue(userEmailID);
    await signUpPage.addAccountInformation("Mrs", "veena@987", "24", "12", "2004"); 
    await signUpPage.addAddressInformation("veena", "sharma", "xyz", "vijay nagar", 
                                          "near shopping complex", "India", "Madhya Pradesh",
                                          "Indore", "111111", "+911234567890");
    await signUpPage.clickOnCreateAccountButton();
    await expect(page.locator('.col-sm-9 h2 b')).toHaveText("Account Created!");

    await page.locator('.pull-right .btn').click();
    (await page.locator('.shop-menu ul li:nth-child(10)').innerText()).includes('veena');
    await page.locator('.shop-menu ul li:nth-child(5)').click();

    await expect(page.locator('.col-sm-9 h2 b')).toHaveText("Account Deleted!");
})