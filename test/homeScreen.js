// Page Object Model

import HomePage from '../pages/home.page';

// Data


describe("Should sign in", () => {
it("It should open page", async () => {
    HomePage.open('/');
});

/* it("It should click sign in button", function () {
    HomePage.signInButton.click();
    assert.equal(browser.getTitle(), "Login - My Store")
}); */

it('Comparison of images with My Store page', async () => {
   // await (await (HomePage.topBar.waitForDisplayed()));
    
/*     expect( 
browser.checkElement(HomePage.topBar, "My Store header", {
        }),
        "Error: My Store navigation bar does not match the original"
    ).equal(0); */

    expect(await(browser.checkElement(HomePage.topBar, "My Store header", {})),
                "Error: My Store navigation bar does not match the original").equal(0);
 });

});