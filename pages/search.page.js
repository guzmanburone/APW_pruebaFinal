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

    get resultsList()   {
        return $ ('.center_column');
    }

    /**
     * define or overwrite page methods
     */

    open() {
        super.open('/') //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(1000);
    }

    enterText(item) {
        //this.searchBar.clearValue();
        this.searchBar.setValue(item);
        browser.pause(1000);
    }

    search() {
        this.searchButton.click();
        return this.resultsList.isDisplayed();
    }

    isSearched () {
        this.resultsList.waitForDisplayed(1000);
        return this.resultsList.isDisplayed();
      }
}

export default new SearchPage();


