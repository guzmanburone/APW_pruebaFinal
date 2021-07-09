// Page Object Model

import SearchPage from '../pages/search.page';

// Data

import SearchItemsData from '../resources/searchItemsData';

// Tests

describe("Performing a search operation on MyStore", function () {
    it("It should open page", function () {
        SearchPage.open('/');
        assert.equal(browser.getTitle(), "My Store")
    });


    SearchItemsData.forEach(({article}) => {
        it(`It should search ${article}`, function () {
            SearchPage.enterText(article);
            SearchPage.search();
            //expect(SearchPage.resultsList).toHaveTextContaining('Showing') //Definir por que no funciona
            assert.equal(SearchPage.isSearched(), true)
        });
    });
});