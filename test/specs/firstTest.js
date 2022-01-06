describe('Rahul shetty Academy Login Page', () => {
    it('Verify the URL of the Webpage', () => {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        console.log(browser.getTitle())
        browser.pause(3000)
        expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
    });
});