describe('Verify whether the User Lands to the correct website',  () => {
    it('Verify whether the URL and title of the website matches to snapdeal.com ', async () => {
        await browser.url("https://www.snapdeal.com/");
         browser.maximizeWindow();
        // assert title
       await  expect(browser).toHaveTitle("Shop Online for Men, Women & Kids Clothing, Shoes, Home Decor Items");
        // assert false url
       await  expect(browser).toHaveUrl("https://www.snapdeal.com/");

        browser.minimizeWindow();
    });
});

describe('Verify user navigates to Faq Page after clicking on FAQ option', () =>{
    it('Verify whether the User Title of the FAQ Page contains FAQ', async () =>{

        await browser.url("https://www.snapdeal.com/");
        browser.maximizeWindow();
        await $('=FAQ').click()
        await expect(browser).toHaveTitle("Snapdeal : Help Center");
        browser.minimizeWindow();


    });
});