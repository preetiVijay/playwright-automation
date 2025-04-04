class SignUpPage{

    constructor(page){
        this.page = page;
        this.male = page.locator("#id_gender1");
        this.female = page.locator("#id_gender2");
        this.password = page.locator("#password");
        this.days = page.locator("select[id='days']");
        this.month = page.locator("select[id='months']");
        this.year = page.locator("select[id='years']");
        this.newsLetterCheck = page.locator("#newsletter");
        this.optinCheck = page.locator("#optin");
        this.accountDetailsText = page.locator("div.login-form > h2 > b");
        this.addressInformationText = page.locator("div.login-form > form > h2 > b");
        this.userFirstName = page.locator('#first_name');
        this.userLastName = page.locator('#last_name');
        this.userCompany = page.locator('#company');
        this.userAddress1 = page.locator('#address1');
        this.userAddress2 = page.locator('#address2');
        this.userCountry = page.locator("select#country");
        this.userState = page.locator('#state');
        this.userCity = page.locator('#city');
        this.userZipcode = page.locator('#zipcode');
        this.userMobileNumber = page.locator('#mobile_number');
        this.createAccountButton = page.locator("button.btn");
    }

    async getaccountDetailsTitle(){
        return await this.accountDetailsText.innerText();
    }

    async addAccountInformation(gender, password, days, month, year){
        if(gender == ("Mr")){
            await this.male.check();
        }
        else{
            await this.female.check();
        }
        
        await this.password.fill(password);
        await this.days.selectOption(days);
        await this.month.selectOption(month);
        await this.year.selectOption(year);
        await this.newsLetterCheck.check();
        await this.optinCheck.check();

    }

    async addAddressInformation(userFirstName, userLastName, userCompany, userAddress1, userAddress2, userCountry, userState, userCity, userZipcode, userMobileNumber){
        await this.userFirstName.fill(userFirstName);
        await this.userLastName.fill(userLastName);
        await this.userCompany.fill(userCompany);
        await this.userAddress1.fill(userAddress1);
        await this.userAddress2.fill(userAddress2);
        await this.userCountry.selectOption(userCountry);
        await this.userState.fill(userState);
        await this.userState.fill(userState);
        await this.userCity.fill(userCity);
        await this.userState.fill(userState);
        await this.userZipcode.fill(userZipcode);
        await this.userMobileNumber.fill(userMobileNumber);
    }

    async clickOnCreateAccountButton(){
        await this.createAccountButton.first().click();
    }

}

module.exports = {SignUpPage}