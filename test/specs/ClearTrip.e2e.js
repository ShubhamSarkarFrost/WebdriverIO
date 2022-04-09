describe('Verify Cleartip.com Search Flight Tab Test Scenarios ', () => {

    it('User should navigate to Cleartip website ', async () => {
        const exp_url = "https://www.cleartrip.com/flights";
        const exp_title = "#1 Site for Booking Flights, Hotels, Packages, Trains & Local activities."
        await browser.url(exp_url)
        await browser.maximizeWindow()
        await expect(browser).toHaveUrl(exp_url)
        await expect(browser).toHaveTitle(exp_title)
        await browser.saveScreenshot('./screenshots/ClearTrip_Flight.png')
    });

    it('Enter a Test data in From field in Cleartrip Website', async () =>{

        const from_field = $$('.//h4[text()="From"]//following::input')[0]
        await from_field.setValue("Bangalore")
        await browser.pause(6000)
        const conf_form_field = $('p=Bangalore, IN - Kempegowda International Airport (BLR)')
        conf_form_field.click()
        await browser.pause(6000)
        await browser.saveScreenshot('./screenshots/Cleartrip_from_field.png')
    });

    it('Enter a Test data in To Field in ClearTrip website', async () =>{

        const to_field = $$('.//h4[text()="From"]//following::input')[1]
        await  to_field.setValue("Mumbai")
        await browser.pause(6000)
        const conf_to_field = $('p=Mumbai, IN - Chatrapati Shivaji Airport (BOM)')
        conf_to_field.click()
        await browser.pause(6000)
        await browser.saveScreenshot('./screenshots/Cleartrip_to_field.png')


    })

})