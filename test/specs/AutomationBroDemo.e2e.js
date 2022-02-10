describe('Verify whether the User is able to Successfully navigate to Practice URL',() =>{
    it('Verify whether the Title of the practice URL is same as the expected URL', async()=>{
        const expected_title = "Practice E-Commerce Site – Automation Bro"
        const expected_url = "https://practice.automationbro.com/"
        await browser.url("https://practice.automationbro.com/")
        browser.maximizeWindow()
        // assert the title of the WebPage
        await expect(browser).toHaveTitle(expected_title)
        // assert the url of the webpage
        await expect(browser).toHaveUrl(expected_url)


    });

    it('Get the Text of all Menu Items and Assert Them', async()=>{
        const expected_title = "Practice E-Commerce Site – Automation Bro"
        const expected_url = "https://practice.automationbro.com/"
        await browser.url("https://practice.automationbro.com/")
        browser.maximizeWindow()
        // assert the title of the WebPage
        await expect(browser).toHaveTitle(expected_title)
        // assert the url of the webpage
        await expect(browser).toHaveUrl(expected_url)

        const ExpectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        const ActualLinks = [];

        const NavLinks = await $('#primary-menu').$$('li[id*=menu]');
        // or Use $${#primary-menu li[id*=menu]}

        for(const links of NavLinks){
            ActualLinks.push(await links.getText());
        }

        await expect(ExpectedLinks).toEqual(ActualLinks);
    })
})

