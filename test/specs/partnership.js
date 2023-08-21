const { expect } = require('@wdio/globals');
const HomePage = require('../pageobjects/home.page');
const TopNavigation = require('../pageobjects/components/topNavigation.component');
const PartnersPage = require('../pageobjects/partners.page');

describe('Partnership', () => {

    before(async () => {
        await HomePage.open()
        await HomePage.buttonAcceptCookies.click();
      });

    it('Submit "Become a Partner" contact form', async () => {
        await TopNavigation.tabBusiness.click();
        await TopNavigation.tabPartners.click();
        await PartnersPage.submitContactForm();

        await expect(PartnersPage.messageThankYou).toHaveText(
        'Thank you for reaching out to us. We will get back to you within 1 business day.')
    })
})
