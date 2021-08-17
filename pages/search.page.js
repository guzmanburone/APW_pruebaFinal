import Page from './page';

class SearchPage extends Page {
    /**
     * define elements
     */

    get logo()  {
        return $('#header_logo');
    }

    get searchBar() {
        return $('#search_query_top');
    }

    get searchButton() {
        return $('//*[@id="searchbox"]/button');}

    /* get resultsList()   {
        return $ ('.center_column');
    } */

    get resultsList()   {
        return $ ('//*[@id="center_column"]/h1/span[1]');
    }

    /**
     * define or overwrite page methods
     */

    open() {
        super.open('/') //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(1000);
    }

    async enterText(item) {
        //this.searchBar.clearValue();
        await (await this.searchBar).setValue(item);
        browser.pause(1000);
    }

    async search() {
        await (await this.searchButton).click();
        //return this.resultsList.isDisplayed();
    }

    /* async isSearched () {
        await (await this.resultsList).waitForDisplayed(1000);
        return this.resultsList.isDisplayed();
      } */
}

export default new SearchPage();


