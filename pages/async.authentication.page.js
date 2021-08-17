import Page from './page';

class Authentication extends Page {
    /**
     * define elements
     */

    get h1Header() {
        return $('h1');
    }

    // Sign Up section

    get createEmail() {
        return $('#email_create');
    }

    get createButton() {
        return $('#SubmitCreate');
    }

    // Sign In section

    get signInEmail() {
        return $('#email');
    }

    get signInPassword() {
        return $('#passwd');
    }

    get forgotPassword() {
        return $("//a[@title='Recover your forgotten password']");
    }

     get backToLogin() {
        return $("//a[@title='Back to Login']");
    } 

    get signInButton() {
        return $('#SubmitLogin');
    }

    /**
     * define or overwrite page methods
     */

    open() {
        super.open('/') //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(1000);
    }


    // Sign Up section

    async enterCreateEmailValue(item) {
        await (await this.createEmail).waitForDisplayed();
        await (await this.createEmail).setValue(item);
    }

    async clickCreateButton(item) {
        await (await this.createButton).waitForDisplayed();
        await (await this.createButton).click();
    }

    // Sign In section


    async clickForgotYourPassword() {
        await (await this.forgotPassword).waitForDisplayed();
        await (await this.forgotPassword).click();
    }

    async clickBackToLogin() {
        await (await this.backToLogin).waitForDisplayed();
        await (await this.backToLogin).click();
    }

    async enterEmailValue(item) {
        await (await this.signInEmail).waitForDisplayed();
        await (await this.signInEmail).setValue(item);
    }

    async enterPasswordlValue(item) {
        await (await this.signInPassword).waitForDisplayed();
        await (await this.signInPassword).setValue(item);
    }

    async clickSignInButton() {
        await (await this.signInButton).waitForDisplayed();
        await (await this.signInButton).click();
    }

// Test for checkout

/*     loginAs(userEmail,password) {
        this.signInEmail.setValue(userEmail);
        this.signInPassword.setValue(password);
        this.signInButton.click();
} */

}

export default new Authentication();