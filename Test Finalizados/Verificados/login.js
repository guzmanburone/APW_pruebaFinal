// Page Object Model

import HomePage from '../../pages/home.page';
import Authentication from '../../pages/authentication.page';

// Data

const signInData = require('../../resources/signInData');

// Tests

describe('My Login application', () => {

    it('It should sign in', async () => {
        await HomePage.open('/');
    });

    it("It should click sign in button", async () => {
        await HomePage.clickSignInButton();
        assert.equal((await browser.getTitle()), "Login - My Store")
    });

    it("It should click in Forgot your password", async () => {
        await Authentication.clickForgotYourPassword();
    });

    it("It should click in Back to Login button", async () => {
        await Authentication.clickBackToLogin();
    });

    it("It should enter invalid email value", async () => {
        await Authentication.enterEmailValue(signInData.invalid_email);
    });

    it("It should enter invalid password value", async () => {
        await Authentication.enterPasswordlValue(signInData.invalid_password);
    });

    it("It should enter valid email value", async () => {
        await Authentication.enterEmailValue(signInData.valid_email);
    });

    it("It should enter valid password value", async () => {
        await Authentication.enterPasswordlValue(signInData.valid_password);

    });

    it("It should click sign button", async () => {
        await Authentication.clickSignInButton();
        assert.equal((await browser.getTitle()), "My account - My Store")
    });



    

});