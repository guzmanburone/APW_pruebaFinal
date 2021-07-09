// Page Object Model

import HomePage from '../pages/home.page';
import Checkout from '../pages/checkout.page';


// Data

const signInData = require('../resources/signInData');

// Tests

// Add items to cart

describe("Adding first item to cart from Quickview and proceed to checkout", function () {

    it("It should open page", function () {
        HomePage.open('/');
        assert.equal(browser.getTitle(), "My Store")
    });

    it("It should click and open Quick View", function () {
        HomePage.moveToFirstItem();
        HomePage.openQuickView();
    });

    it("It should click add to cart button", function () {
        browser.switchToFrame(HomePage.iframe);
        HomePage.clickAddToCartButton();
        assert.equal('Product successfully added to your shopping cart', HomePage.h2Header.getText())
    });

    // Checkout process

    it("It should click Proceed to checkout button", function () {
        HomePage.clickCheckoutButton();
        browser.pause(5000);
    });


    it("It should click Proceed to checkout button in Summary Screen", function () {
        browser.switchToParentFrame();
        Checkout.clickProceedToCheckoutButton();
    });

    it("It should run login action", function () {
        Checkout.loginAs(signInData.valid_email, signInData.valid_password);
    });


    it("It should click Proceed to checkout button in Address", function () {
        Checkout.clickAdressProceedToCheckoutButton();
    });

    it("It should check TOS and open TOS information", function () {
        Checkout.selectTermsCheckbox();
    });

    it("It should click Proceed to checkout button in Shipping", function () {
        Checkout.clickShippingProceedToCheckoutButton();
    });

    it("It should click Pay by bank wire", function () {
        Checkout.clickBankWireOption();
    });

    it("It should click I confirm my order button in Payment", function () {
        Checkout.clickConfirmOrderButton();
        browser.pause(10000);
    });

});