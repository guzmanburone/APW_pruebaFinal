// Page Object Model

import SearchPage from '../pages/search.page';

// Data

import SearchItemsData from '../resources/searchItemsData';

// Tests

describe("Performing a search operation on MyStore", () => {
    it("It should open page", async () => {
        await SearchPage.open('/');
        //assert.equal((await browser.getTitle()), "My Store")
    });


    SearchItemsData.forEach(({article}) => {
        it(`It should search ${article}`, async () => {
            await SearchPage.enterText(article);
            await  SearchPage.search();
            expect(await (await SearchPage.resultsList).getText()).to.include(article)
        });
    });
});z