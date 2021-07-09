import Page from './page';

/* sub page containing specific selectors and methods for a specific page
*/

class HomePage extends Page {

    /**
     * define selectors using getter methods
     */


    get topBar() {
        return $("//*[@id='header']/div[2]");
    }

    get signInButton() {
        return $('.login');
    }

    get iframe() {
        return $('.fancybox-iframe');
    }

    get addToCartiframeButton() {
        return $('#add_to_cart');
    }

    get checkoutIframeButton() {
        return $("//a[@title='Proceed to checkout']");
    }
    
    get firstItem() {
        return $("//*[@id='homefeatured']/li[1]/div/div[1]/div");
    }

    get quickViewButton() {
        return $('.quick-view');
    }

    get cartWindow() {
        return $('.clearfix');
    }

    get h2Header() {
        return $('h2');
    }

    /**
     * define or overwrite page methods
     */

    open() {
        super.open('/') //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(1000);
    }

    moveToFirstItem() {
        this.firstItem.scrollIntoView();
        this.firstItem.moveTo();
    }

    openQuickView() {
        this.quickViewButton.waitForDisplayed();
        this.quickViewButton.click();
    }

    clickAddToCartButton() {
        this.addToCartiframeButton.click();
        this.cartWindow.waitForDisplayed();
    }

    clickCheckoutButton() {
        this.checkoutIframeButton.click();
    }


}

export default new HomePage();