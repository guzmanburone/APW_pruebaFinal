// Page Object Model

import HomePage from '../pages/async.home.page';
import Authentication from '../pages/async.authentication.page';
import SignUp from '../pages/async.signup.page';


// Data

const signInData = require ('../resources/signInData');

// Tests

describe("Should create a new account", () => {
    it("It should open page", async () => {
        SignUp.open('/');
    });

    it("It should click sign in button", async () => {
        await HomePage.clickSignInButton();
        assert.equal((await browser.getTitle()), "Login - My Store")
    });

    it("It should enter value in email", async () => {
        await Authentication.enterCreateEmailValue(signInData.created_email_class);
    });

    it("It should click in Create an account button", async () => {
        await Authentication.clickCreateButton();
        //await SignUp.pageTitle.waitForDisplayed();
        //assert.equal('AUTHENTICATION', SignUp.pageTitle.getText())

    });

    // Your personal information

    it("It should select ´Mr´ option", async () => {
        await SignUp.selectGenderMr();
    });

    it("It should enter value in First Name", async () => {
        await SignUp.enterCustomerFirstName(signInData.first_name_class);
        // assert.equal(signInData.first_name_class, SignUp.customerFirstName.getValue());
    });

    it("It should enter value in Last Name", async () => {
        await SignUp.enterCustomerLastName(signInData.last_name_class);
        //assert.equal(signInData.last_name_class, SignUp.customerLastName.getValue());
    });

    it("It should check if value in Email is the same as the one used in Auth Page", async () => {
        //expect(signInData.created_email_class).to.equal(SignUp.customerEmail.getValue());
    });

    it("It should enter invalid value in Password", async () => {
        await SignUp.enterCustomerPassword('1234');
        await SignUp.goAwayAndComeBackToPassword();
        //const sign_up_class = SignUp.passwordValidation.getAttribute('class');
        //expect(sign_up_class).to.equal('required password form-group form-error')
    });

    it("It should enter valid value in Password", async () => {
        await SignUp.enterCustomerPassword('12345');
        await SignUp.goAwayAndComeBackToPassword();
        //const sign_up_class = SignUp.passwordValidation.getAttribute('class');
        //expect(sign_up_class).to.equal('required password form-group form-ok')
    });

    it("It should select first result in Day Dropdown", async () => {
        await SignUp.clickDayDropdownOption1();
    });

    it("It should select first result in Month Dropdown", async () => {
        await SignUp.clickMonthDropdownOption1();
    });

    it("It should select first result in Years Dropdown", async () => {
        await SignUp.clickYearsDropdownOption1();
    });
    it("It should select newsletterOption", async () => {
        await SignUp.newsletterSignUp();
    });

    it("It should select specialOffersOption", async () => {
        await SignUp.checkSpecialOffersOption();
    });

    // Your address


    it("It should check if shown value in Your Address First name is the same as in Personal Information", async () => {

        //assert.equal(signInData.first_name_class, SignUp.adressedFirstName.getValue());
    });

    it("It should check if shown value in Your Address Last name is the same as in Personal Information", async () => {
        //assert.equal(signInData.last_name_class, SignUp.adressedLastName.getValue());

    });

    it("It should enter other value in Your Address First Name", async () => {
        await SignUp.enterAddressFirstName(signInData.first_name_class_2);
    });

    it("It should enter other value in Your Address Last Name", async () => {
        await SignUp.enterAddressLastName(signInData.last_name_class_2);
    });

    it("It should enter value in Company", async () => {
        await SignUp.enterCompany('Abstracta');
    });

    it("It should enter value in Address", async () => {
        await SignUp.enterAddress1('Sendero del Parque 263');
    });

    it("It should enter value in Address Line 2", async () => {
        await SignUp.enterAddress2('Pinares del Este');
    });

    it("It should enter value in City", async () => {
        await SignUp.enterCity('El Pinar');
    });

    it("It should select first option in State dropdown", async () => {
        await SignUp.clickStateDropdownOption1();
    });

    it("It should enter value in Zip", async () => {
        await SignUp.enterZip('14800');
    });

    it("It should select first option in Country dropdown", async () => {
        await SignUp.enterCountryFirstOption();
    });

    it("It should enter value in Additional Information", async () => {
        await SignUp.enterAdditionalInformation('Esto es un texto de prueba. A ver que sale de todo esto. Vamo arriba');
    });

    it("It should enter Home phone", async () => {
        await SignUp.enterHomePhone('02 613 3887');
    });

    it("It should enter value in Mobile phone", async () => {
        await SignUp.enterMobilePhone('+598 97 212 067');
    });

    it("It should enter adressed alias", async () => {
        await SignUp.enterAdressedAlias('Guchi');
    });

    it("It should click Register button", async () => {
        await SignUp.clickRegisterButton();
    });
});