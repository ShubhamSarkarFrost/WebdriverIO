describe('Verify OLX Website Test Scenario',()=>{
    it('Verify whether User is navigated to Correct Website when trying to Log in to olx',async ()=>{

        const expected_title = "OLX - Free classifieds in India, Buy and Sell for free anywhere in India with OLX Online Classified Advertising"
        const expected_url = "https://www.olx.in/"
        await browser.url("https://www.olx.in/")
        browser.maximizeWindow()
        //assert the Title of the webpage
        await expect(browser).toHaveTitle(expected_title)
        // assert the URL of the webpage
        await expect(browser).toHaveUrl(expected_url)
    });

    it('Verify whether the user can search for a Product using the Global Search Option', async ()=>{
        // Enter value in Search Box
        await $('input[data-aut-id="searchBox"]').addValue("iphone")
        // Click on the Search Button
        await $('div[data-aut-id="btnSearch"]').click()
        // wait untill the search result is displayed
        const searchtext = $('h1[class="PePdS"]').waitForEnabled({timeout:3000})
    });

    // it('Verify whether the menu contains the list of the submenu in olx website',async ()=>{
    //
    //     const expected_list = [
    //         'For Sale: Houses & Apartments',
    //         'For Rent: Houses & Apartments',
    //         'Lands & Plots',
    //         'For Rent: Shops & Offices',
    //         'For Sale: Shops & Offices',
    //         'PG & Guest Houses',
    //         'Mobile Phones',
    //         'Accessories',
    //         'Tablets',
    //         'Data entry & Back office',
    //         'Sales & Marketing',
    //         'BPO & Telecaller',
    //         'Driver',
    //         'Office Assistant',
    //         'Delivery & Collection',
    //         'Teacher',
    //         'Cook',
    //         'Receptionist & Front office',
    //         'Operator & Technician',
    //         'IT Engineer & Developer',
    //         'Hotel & Travel Executive',
    //         'Accountant',
    //         'Designer',
    //         'Other Jobs',
    //         'Motorcycles',
    //         'Scooters',
    //         'Spare Parts',
    //         'Bicycles',
    //         'TVs, Video - Audio',
    //         'Kitchen & Other Appliances',
    //         'Computers & Laptops',
    //         'Cameras & Lenses',
    //         'Games & Entertainment',
    //         'Fridges',
    //         'Computer Accessories',
    //         'Hard Disks, Printers & Monitors',
    //         'ACs',
    //         'Washing Machines',
    //         'Commercial & Other Vehicles',
    //         'Spare Parts',
    //         'Sofa & Dining',
    //         'Beds & Wardrobes',
    //         'Home Decor & Garden',
    //         'Kids Furniture',
    //         'Other Household Items',
    //         'Men',
    //         'Women',
    //         'Kids',
    //         'Books',
    //         'Gym & Fitness',
    //         'Musical Instruments',
    //         'Sports Equipment',
    //         'Other Hobbies',
    //         'Fishes & Aquarium',
    //         'Pet Food & Accessories',
    //         'Dogs',
    //         'Other Pets',
    //         'Electronics & Computer',
    //         'Education & Classes',
    //         'Drivers & Taxi',
    //         'Health & Beauty',
    //         'Other Services'
    //     ];
    //
    //      await $('span=All Categories').click()
    //
    //
    //     const submenulinks = [];
    //     const Submenu = await $$('div[class="_3AGJR"]')
    //
    //     for(const menu of Submenu) {
    //         submenulinks.push(await menu.getText());
    //
    //     }
    //     await expect(expected_list).toEqual(submenulinks)
    // })
})