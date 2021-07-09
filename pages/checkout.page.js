import Page from './page';

class Checkout extends Page {
    /**
     * define elements
     */

    get h1Header() {
        return $('h1');
    }

    get checkoutButton() {
        return $('//*[@id="center_column"]/p[2]/a[1]');
    } 


    // Summary Step


    // Sign In Step

    get signInEmail() {
        return $('#email');
    }

    get signInPassword() {
        return $('#passwd');
    }

    get signInButton() {
        return $('#SubmitLogin');
    }

    get customerName() {
        return $('.account');
    }

    // Address Step

    get addressMessage() {
        return $('#ordermsg');
    }

    get addressCheckoutButton() {
        return $("//*[@id='center_column']/form/p/button");
    }


    // Shipping Step

    get termsOfServiceCheckbox() {
        return $('#uniform-cgv');
    }

    get termsAndConditions() {
        return $('.iframe');
    }

    get closeTermsIframeButton() {
        return $("//a[@title='Close']");
    }

    get closeErrorIframeButton() {
        return $('.fancybox-error');
    }

    get shippingCheckoutButton() {
        return $("//*[@id='form']/p/button");
    }

    // Payment Step

    get bankWire() {
        return $('.bankwire');
    }

    get cheque() {
        return $('.cheque');
    }

    get cheque() {
        return $('.cheque');
    }

    get confirmOrderButton() {
        return $("//*[@id='cart_navigation']/button");
    }


    /**
     * define or overwrite page methods
     */

    open() {
        super.open('/') //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(1000);
    }


    clickProceedToCheckoutButton() {
        this.checkoutButton.scrollIntoView();
        this.checkoutButton.waitForDisplayed();
        this.checkoutButton.click();
    }

    clickAdressProceedToCheckoutButton() {
        this.addressCheckoutButton.scrollIntoView();
        this.addressCheckoutButton.waitForDisplayed();
        this.addressCheckoutButton.click();
    }

    clickShippingProceedToCheckoutButton() {
        this.shippingCheckoutButton.scrollIntoView();
        this.shippingCheckoutButton.waitForDisplayed();
        this.shippingCheckoutButton.click();
    }

    loginAs(userEmail, password) {
        this.signInEmail.setValue(userEmail);
        this.signInPassword.setValue(password);
        this.signInButton.click();
    }

    enterAddressMessage(message) {
        this.addressMessage.waitForDisplayed();
        this.addressMessage.setValue(message);
    }

    selectTermsCheckbox() {
        this.termsOfServiceCheckbox.waitForDisplayed();
        this.termsOfServiceCheckbox.moveTo();
        this.termsOfServiceCheckbox.click();
    }

    clickBankWireOption() {
        this.bankWire.waitForDisplayed();
        this.bankWire.click();
    }

    clickChequeOption() {
        this.cheque.waitForDisplayed();
        this.cheque.click();
    }

    clickConfirmOrderButton() {
        this.confirmOrderButton.waitForDisplayed();
        this.confirmOrderButton.click();
    }
}

export default new Checkout();