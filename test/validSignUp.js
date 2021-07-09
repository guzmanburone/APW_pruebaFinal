// Page Object Model

import HomePage from '../pages/home.page';
import Authentication from '../pages/authentication.page';
import SignUp from '../pages/signup.page';


// Data

const signInData = require ('../resources/signInData');

// Tests

describe("Should create a new account", function () {
    it("It should open page", function () {
        SignUp.open('/');
    });

    it("It should click sign in button", function () {
        HomePage.signInButton.click();
        assert.equal(browser.getTitle(), "Login - My Store")
    });

    it("It should enter value in email", function () {
        //const created_email_class = faker.internet.email();
        Authentication.enterCreateEmailValue(signInData.created_email_class);
    });

    it("It should click in Create an account button", function () {
        Authentication.clickCreateButton();
        SignUp.pageTitle.waitForDisplayed();
        assert.equal('AUTHENTICATION', SignUp.pageTitle.getText())

    });

    // Your personal information

    it("It should select ´Mr´ option", function () {
        SignUp.selectGenderMr();
    });

    it("It should enter value in First Name", function () {
        SignUp.enterCustomerFirstName(signInData.first_name_class);
        assert.equal(signInData.first_name_class, SignUp.customerFirstName.getValue());
    });

    it("It should enter value in Last Name", function () {
        SignUp.enterCustomerLastName(signInData.last_name_class);
        assert.equal(signInData.last_name_class, SignUp.customerLastName.getValue());
    });

    it("It should check if value in Email is the same as the one used in Auth Page", function () {
        expect(signInData.created_email_class).to.equal(SignUp.customerEmail.getValue());
    });

    it("It should enter invalid value in Password", function () {
        SignUp.enterCustomerPassword('1234');
        SignUp.goAwayAndComeBackToPassword();
        const sign_up_class = SignUp.passwordValidation.getAttribute('class');
        expect(sign_up_class).to.equal('required password form-group form-error')
    });

    it("It should enter valid value in Password", function () {
        SignUp.enterCustomerPassword('12345');
        SignUp.goAwayAndComeBackToPassword();
        const sign_up_class = SignUp.passwordValidation.getAttribute('class');
        expect(sign_up_class).to.equal('required password form-group form-ok')
    });

    it("It should select first result in Day Dropdown", function () {
        SignUp.clickDayDropdownOption1();
    });

    it("It should select first result in Month Dropdown", function () {
        SignUp.clickMonthDropdownOption1();
    });

    it("It should select first result in Years Dropdown", function () {
        SignUp.clickYearsDropdownOption1();
    });
    it("It should select newsletterOption", function () {
        SignUp.newsletterSignUp();
    });

    it("It should select specialOffersOption", function () {
        SignUp.checkSpecialOffersOption();
    });

    // Your address


    it("It should check if shown value in Your Address First name is the same as in Personal Information", function () {

        assert.equal(signInData.first_name_class, SignUp.adressedFirstName.getValue());
    });

    it("It should check if shown value in Your Address Last name is the same as in Personal Information", function () {
        assert.equal(signInData.last_name_class, SignUp.adressedLastName.getValue());

    });

    it("It should enter other value in Your Address First Name", function () {
        SignUp.enterAddressFirstName(signInData.first_name_class_2);
    });

    it("It should enter other value in Your Address Last Name", function () {
        SignUp.enterAddressLastName(signInData.last_name_class_2);
    });

    it("It should enter value in Company", function () {
        SignUp.enterCompany('Abstracta');
    });

    it("It should enter value in Address", function () {
        SignUp.enterAddress1('Sendero del Parque 263');
    });

    it("It should enter value in Address Line 2", function () {
        SignUp.enterAddress2('Pinares del Este');
    });

    it("It should enter value in City", function () {
        SignUp.enterCity('El Pinar');
    });

    it("It should select first option in State dropdown", function () {
        SignUp.clickStateDropdownOption1();
    });

    it("It should enter value in Zip", function () {
        SignUp.enterZip('14800');
    });

    it("It should select first option in Country dropdown", function () {
        SignUp.enterCountryFirstOption();
    });

    it("It should enter value in Additional Information", function () {
        SignUp.enterAdditionalInformation('Esto es un texto de prueba. A ver que sale de todo esto. Vamo arriba');
    });

    it("It should enter Home phone", function () {
        SignUp.enterHomePhone('02 613 3887');
    });

    it("It should enter value in Mobile phone", function () {
        SignUp.enterMobilePhone('+598 97 212 067');
    });

    it("It should enter adressed alias", function () {
        SignUp.enterAdressedAlias('Guchi');
    });

    it("It should click Register button", function () {
        SignUp.clickRegisterButton();
    });

});