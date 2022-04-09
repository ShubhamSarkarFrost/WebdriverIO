describe('Verify IndiaMart  Website  Test Scenarios ', () => {
    it('User should navigate to IndiaMart Website after clicking on the URL', async () => {
        const exp_url = "https://www.indiamart.com/";
        const exp_title = "IndiaMART - Indian Manufacturers Suppliers Exporters Directory, India Exporter Manufacturer"
        await browser.url(exp_url)
        await browser.maximizeWindow()
        await expect(browser).toHaveUrl(exp_url)
        await expect(browser).toHaveTitle(exp_title)
        await browser.saveScreenshot('./screenshots/url_title.png')
    });

    it('User should view all the Essential Link below the Search Bar', async () => {

        const expected_essential_links = [
            "Drugs & Pharma",
            "Hospital & Diagnostics",
            "Food & Agriculture",
            "Industrial Machinery",
            "Industrial Supplies",
            "Electronics & Electrical",
            "View All Categories",
        ]

        const actual_essential_links = []
        const essentail_links = await  $$('//div[@class="col menu-item"]//span')

        for(const links of essentail_links) {
            actual_essential_links.push(await links.getText())
        }

        await expect(actual_essential_links).toEqual(expected_essential_links)
        await browser.saveScreenshot('./screenshots/expected_links.png')
    })
})