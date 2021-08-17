// Page Object Model

import HomePage from '../pages/home.page';
import Authentication from '../pages/authentication.page';

// Data

const signInData = require ('../resources/signInData');

// Tests

describe("Should sign in", function () {
    it("It should open page", function () {
        HomePage.open('/');
    });

it("It should click sign in button", function () {
    HomePage.signInButton.click();
    assert.equal(browser.getTitle(), "Login - My Store")
});

it("It should click in Forgot your password", function () {
    Authentication.clickForgotYourPassword();
});

it("It should click in Back to Login button", function () {
    Authentication.clickBackToLogin();
});

it("It should enter invalid email value", function () {
    Authentication.enterEmailValue(signInData.invalid_email);
});

it("It should enter invalid password value", function () {
    Authentication.enterPasswordlValue(signInData.invalid_password);
});

it("It should enter valid email value", function () {
    Authentication.enterEmailValue(signInData.valid_email);
});

it("It should enter valid password value", function () {
    Authentication.enterPasswordlValue(signInData.valid_password);
});

it("It should click sign button", function () {
    Authentication.clickSignInButton();
});


});