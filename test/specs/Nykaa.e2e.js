describe('Verify whether the User navigates to Nykaa Home Page', () => {
    it('Verify whether the URL and title of the website matches to nykaa.com ', async () => {
        await browser.url("https://www.nykaa.com/");
        browser.maximizeWindow();
        // assert title
        await expect(browser).toHaveTitle("Buy Cosmetics Products & Beauty Products Online in India at Best Price | Nykaa");
        // assert false url
        await expect(browser).toHaveUrl("https://www.nykaa.com/");

        browser.minimizeWindow();
    });

    it('Verify whether the User is able to search for a Product using Product search Option', async () => {
        await browser.url("https://www.nykaa.com/");
        browser.maximizeWindow();

        // search for lipstick
        await $('.css-1p0hsio').addValue("Lipstick");
        browser.keys('Enter');
        // Verify whether the user has landed to the correct search page or not
        const searchkey = await $('.page-title-search').getText();
        await expect(searchkey).toEqual("Lipstick")
        // click on the Logo
        await $('a[title="logo"]').click();
        // verify whether the user has the url with root = logo
        await expect(browser).toHaveUrl("https://www.nykaa.com/?root=logo")
        // minimize the window
        browser.minimizeWindow();


    });

});

