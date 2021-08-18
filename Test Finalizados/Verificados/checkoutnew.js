// Page Object Model

import HomePage from '../../pages/home.page';
import Checkout from '../../pages/checkout.page';


// Data

const signInData = require('../../resources/signInData');

// Tests

// Add items to cart

describe("Adding first item to cart from Quickview and proceed to checkout", () => {

    it("It should open page", async () => {
        await HomePage.open('/');
        //assert.equal(await browser.getTitle(), "My Store")
    });

    it("It should click and open Quick View", async () => {
        await HomePage.moveToFirstItem();
        await HomePage.openQuickView();
    });

    it("It should click add to cart button", async () => {
        browser.switchToFrame(await HomePage.iframe);
        await HomePage.clickAddToCartButton();
        //assert.equal('Product successfully added to your shopping cart',await HomePage.h2Header.getText())
    });

    // Checkout process

    it("It should click Proceed to checkout button", async () => {
        await HomePage.clickCheckoutButton();
    });


    it("It should click Proceed to checkout button in Summary Screen", async () => {
        browser.switchToParentFrame();
        await Checkout.clickProceedToCheckoutButton();
    });

    it("It should run login action", async () => {
        await Checkout.loginAs(signInData.valid_email, signInData.valid_password);
    });


    it("It should click Proceed to checkout button in Address", async () => {
        await Checkout.clickAdressProceedToCheckoutButton();
    });

    it("It should check TOS and open TOS information", async () => {
        await Checkout.selectTermsCheckbox();
    });

    it("It should click Proceed to checkout button in Shipping", async () => {
        await Checkout.clickShippingProceedToCheckoutButton();
    });

    it("It should click Pay by bank wire", async () => {
        await Checkout.clickBankWireOption();
    });

    it("It should click I confirm my order button in Payment", async () => {
        await Checkout.clickConfirmOrderButton();
        //await assert.equal('Your order on My Store is complete.', Checkout.orderCompleted.getText())
    });
});