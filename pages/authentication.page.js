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

    enterCreateEmailValue(item) {
        this.createEmail.waitForDisplayed();
        this.createEmail.setValue(item);
    }

    clickCreateButton(item) {
        this.createButton.waitForDisplayed();
        this.createButton.click();
    }

    // Sign In section


    clickForgotYourPassword() {
        this.forgotPassword.waitForDisplayed();
        this.forgotPassword.click();
    }

    clickBackToLogin() {
        this.backToLogin.waitForDisplayed();
        this.backToLogin.click();
    }

    enterEmailValue(item) {
        this.signInEmail.waitForDisplayed();
        this.signInEmail.setValue(item);
    }

    enterPasswordlValue(item) {
        this.signInPassword.waitForDisplayed();
        this.signInPassword.setValue(item);
    }

    clickSignInButton() {
        this.signInButton.waitForDisplayed();
        this.signInButton.click();
    }

// Test for checkout

    loginAs(userEmail,password) {
        this.signInEmail.setValue(userEmail);
        this.signInPassword.setValue(password);
        this.signInButton.click();
}

}

export default new Authentication();