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

    selectGenderMr() {
        this.genderMr.waitForDisplayed();
        this.genderMr.scrollIntoView();
        this.genderMr.click();
    }

    selectGenderMrs() {
        this.genderMrs.waitForDisplayed();
        this.genderMrs.click();;
    }

    enterCustomerFirstName(item) {
        this.customerFirstName.waitForDisplayed();
        this.customerFirstName.setValue(item);
    }

    enterCustomerLastName(item) {
        this.customerLastName.waitForDisplayed();
        this.customerLastName.setValue(item);
    }

    enterCustomerPassword(item) {
        this.customerPassword.waitForDisplayed();
        this.customerPassword.setValue(item);
    }

    goAwayAndComeBackToPassword(item) {
        this.customerEmail.click();
        this.customerPassword.click(item);
    }

    clickDayDropdownOption1() {
        this.BirthDayFirstOption.click()
    }

    clickMonthDropdownOption1() {
        this.MonthFirstOption.click()
    }

    clickYearsDropdownOption1() {
        this.YearFirstOption.click()
    }

    newsletterSignUp() {
        this.newsletterOption.scrollIntoView();
        this.newsletterOption.click();
    }

    checkSpecialOffersOption() {
        this.specialOffersOption.waitForDisplayed();
        this.specialOffersOption.click();
    }

    enterAddressFirstName() {
        this.adressedFirstName.waitForDisplayed();
        this.adressedFirstName.getValue();
    }

    enterAddressLastName() {
        this.adressedLastName.waitForDisplayed();
        this.adressedLastName.getValue();
    }

    enterCompany(item) {
        this.company.waitForDisplayed();
        this.company.setValue(item);
    }

    enterAddress1(item) {
        this.adress1.waitForDisplayed();
        this.adress1.setValue(item);
    }

    enterAddress2(item) {
        this.adress2.waitForDisplayed();
        this.adress2.setValue(item);
    }

    enterCity(item) {
        this.city.waitForDisplayed();
        this.city.setValue(item);
    }

    clickStateDropdownOption1() {
        this.stateFirstOption.click()
    }

    enterZip(item) {
        this.postalCode.waitForDisplayed();
        this.postalCode.setValue(item);
    }

    enterCountryFirstOption() {
        this.countryFirstOption.click();
    }

    enterAdditionalInformation(item) {
        this.additionalInformation.waitForDisplayed();
        this.additionalInformation.setValue(item);
    }

    enterHomePhone(item) {
        this.homePhone.waitForDisplayed();
        this.homePhone.setValue(item);
    }

    enterMobilePhone(item) {
        this.mobilePhone.waitForDisplayed();
        this.mobilePhone.setValue(item);
    }

    enterAdressedAlias(item) {
        this.adressAlias.waitForDisplayed();
        this.adressAlias.setValue(item);
    }

    clickRegisterButton() {
        this.registerButton.waitForDisplayed();
        this.registerButton.click();
        ;
    }


    // PRUEBA

    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText())
        })
    }




}

export default new SignUp();