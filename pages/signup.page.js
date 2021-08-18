import Page from './page';

class SignUp extends Page {

    /**
     * define elements
     */


    get pageTitle() {
        return $('h1')
    }

    //"YOUR PERSONAL INFORMATION" SECTION//


    get genderMr() {
        return $('#id_gender1');
    }

    get genderMrs() {
        return $('#id_gender2');
    }
    get customerFirstName() {
        return $('#customer_firstname');
    }

    get customerLastName() {
        return $('#customer_lastname');
    }

    get customerEmail() {
        return $('#email');
    }

    get customerPassword() {
        return $('#passwd');
    }

    get BirthDayFirstOption() {
        return $('#days option:nth-child(2)');
    }

    get MonthFirstOption() {
        return $('#months option:nth-child(2)');
    }

    get YearFirstOption() {
        return $('#years option:nth-child(2)');
    }

    get newsletterOption() {
        return $('#uniform-newsletter');
    }

    get specialOffersOption() {
        return $('#uniform-optin');
    }

    //"YOUR ADDRESS" SECTION//

    get adressedFirstName() {
        return $('#firstname');
    }

    get adressedLastName() {
        return $('#lastname');
    }

    get company() {
        return $('#company');
    }

    get adress1() {
        return $('#address1');
    }

    get adress2() {
        return $('#address2');
    }

    get city() {
        return $('#city');
    }

    get stateFirstOption() {
        return $('#id_state option:nth-child(2)');
    }

    get postalCode() {
        return $('#postcode');
    }

    get countryFirstOption() {
        return $('#id_country option:nth-child(2)');
    }

    get additionalInformation() {
        return $('#other');
    }

    get homePhone() {
        return $('#phone');
    }

    get mobilePhone() {
        return $('#phone_mobile');
    }

    get adressAlias() {
        return $('#alias');
    }

    get registerButton() {
        return $('#submitAccount');
    }

    //Other Elements

    get alertInformationMissing() {
        return $('//*[@id="center_column"]/div')
    } 

    /* get alertInformationMissing() {
        return $('//*[@id="center_column"]/div/p')
    } */

    /* 
    //*[@id="center_column"]/div/p

    get alertInformationMissingList() {
        return $('//*[@id="center_column"]/div/ol')
    } */

    //*[@id="center_column"]/comment()

    get passwordValidation() {
        return $('//*[@id="account-creation_form"]/div[1]/div[5]');
    }

    get alertInformationMissingList() {
        return $('//*[@id="center_column"]/comment()')
    }



    // PRUEBA DE LISTA


    get parent() {
        return $('ol')
    }
    get childElements() {
        return this.parent.$$('li')
    }


    /**
     * define or overwrite page methods
     */


    open() {
        super.open('/') //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(1000);
    }

    // Methods for filling each input from form

    async selectGenderMr() {
        await (await this.genderMr).waitForDisplayed();
        await (await this.genderMr).scrollIntoView();
        await (await this.genderMr).click();
    }

    async selectGenderMrs() {
        await (await this.genderMrs).waitForDisplayed();
        await (await this.genderMrs).click();
    }

    async enterCustomerFirstName(item) {
        await (await this.customerFirstName).waitForDisplayed();
        await (await this.customerFirstName).setValue(item);
    }

    async enterCustomerLastName(item) {
        await (await this.customerLastName).waitForDisplayed();
        await (await this.customerLastName).setValue(item);
    }

    async enterCustomerPassword(item) {
        await (await this.customerPassword).waitForDisplayed();
        await (await this.customerPassword).setValue(item);
    }

    async goAwayAndComeBackToPassword(item) {
        await (await this.customerEmail).click();
        await (await this.customerPassword).click(item);
    }

    async clickDayDropdownOption1() {
        await (await this.BirthDayFirstOption).click()
    }

    async clickMonthDropdownOption1() {
        await (await this.MonthFirstOption).click()
    }

    async clickYearsDropdownOption1() {
        await (await this.YearFirstOption).click()
    }

    async newsletterSignUp() {
        await (await this.newsletterOption).scrollIntoView();
        await (await this.newsletterOption).click();
    }

    async checkSpecialOffersOption() {
        await (await this.specialOffersOption).waitForDisplayed();
        await (await this.specialOffersOption).click();
    }

    async enterAddressFirstName() {
        await (await this.adressedFirstName).waitForDisplayed();
        await (await this.adressedFirstName).getValue();
    }

    async enterAddressLastName() {
        await (await this.adressedLastName).waitForDisplayed();
        await (await this.adressedLastName).getValue();
    }

    async enterCompany(item) {
        await (await this.company).waitForDisplayed();
        await (await this.company).setValue(item);
    }

    async enterAddress1(item) {
        await (await this.adress1).waitForDisplayed();
        await (await this.adress1).setValue(item);
    }

    async enterAddress2(item) {
        await (await this.adress2).waitForDisplayed();
        await (await this.adress2).setValue(item);
    }

    async enterCity(item) {
        await (await this.city).waitForDisplayed();
        await (await this.city).setValue(item);
    }

    async clickStateDropdownOption1() {
        await (await this.stateFirstOption).click()
    }

    async enterZip(item) {
        await (await this.postalCode).waitForDisplayed();
        await (await this.postalCode).setValue(item);
    }

    async enterCountryFirstOption() {
        await (await this.countryFirstOption).click();
    }

    async enterAdditionalInformation(item) {
        await (await this.additionalInformation).waitForDisplayed();
        await (await this.additionalInformation).setValue(item);
    }

    async enterHomePhone(item) {
        await (await this.homePhone).waitForDisplayed();
        await (await this.homePhone).setValue(item);
    }

    async enterMobilePhone(item) {
        await (await this.mobilePhone).waitForDisplayed();
        await (await this.mobilePhone).setValue(item);
    }

    async enterAdressedAlias(item) {
        await (await this.adressAlias).waitForDisplayed();
        await (await this.adressAlias).setValue(item);
    }

    async clickRegisterButton() {
        await (await this.registerButton).waitForDisplayed();
        await (await this.registerButton).click();
        ;
    }


    // PRUEBA

    /* getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText())
        })
    } */




}

export default new SignUp();