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

    get confirmOrderButton() {
        return $("//*[@id='cart_navigation']/button");
    }

    get orderCompleted() {
        return $("//*[@id='center_column']/div/p/strong");
    }


    /**
     * define or overwrite page methods
     */

    open() {
        super.open('/') //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(1000);
    }


    async clickProceedToCheckoutButton() {
        await (await this.checkoutButton).scrollIntoView();
        await (await this.checkoutButton).waitForDisplayed();
        await (await this.checkoutButton).click();
    }

    async clickAdressProceedToCheckoutButton() {
        await (await this.addressCheckoutButton).scrollIntoView();
        await (await this.addressCheckoutButton).waitForDisplayed();
        await (await this.addressCheckoutButton).click();
    }

    async clickShippingProceedToCheckoutButton() {
        await (await this.shippingCheckoutButton).scrollIntoView();
        await (await this.shippingCheckoutButton).waitForDisplayed();
        await (await this.shippingCheckoutButton).click();
    }

    async loginAs(userEmail, password) {
        await (await this.signInEmail).setValue(userEmail);
        await (await this.signInPassword).setValue(password);
        await (await this.signInButton).click();
    }

    async enterAddressMessage(message) {
        await (await this.addressMessage).waitForDisplayed();
        await (await this.addressMessage).setValue(message);
    }

    async selectTermsCheckbox() {
        
        await (await this.termsOfServiceCheckbox).click();
    }

    async clickBankWireOption() {
        await (await this.bankWire).waitForDisplayed();
        await (await this.bankWire).click();
    }

    async clickChequeOption() {
        await (await this.cheque).waitForDisplayed();
        await (await this.cheque).click();
    }

    async clickConfirmOrderButton() {
        await (await this.confirmOrderButton).waitForDisplayed();
        await (await this.confirmOrderButton).click();
    }
}

export default new Checkout();