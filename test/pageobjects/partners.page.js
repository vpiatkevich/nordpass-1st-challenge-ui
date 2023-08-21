const { $ } = require('@wdio/globals')
const Page = require('./page');
const { faker } = require('@faker-js/faker');

class PartnersPage extends Page {

    get fieldFullName () {
        return $(`(//span[@class='nord-input__wrapper relative inline-block w-full'])[1]`)
    }

    get fieldCompanyName () {
        return $(`(//span[@class='nord-input__wrapper relative inline-block w-full'])[2]`)
    }

    get fieldBusinessEmail () {
        return $(`(//span[@class='nord-input__wrapper relative inline-block w-full'])[3]`)
    }

    get fieldMoreInformation () {
        return $(`(//div[@class='mb-6'])[4]`)
    }

    get buttonSendMessage () {
        return $(`//button[text()='Send Message']`);
    }

    get messageThankYou () {
        return $(`//p[@class='nord-text text-micro leading-normal inline text-green']`);
    }

    get sectionBecomeAPartner () {
        return $(`//div[@id='become a partner - Business Partnerships']`);
    }

    async submitContactForm() {
        let fullName = faker.person.fullName();
        let companyName = faker.company.name();
        let businessEmail = 'manager@' + faker.internet.domainName();
        let moreInformation = 'Hello! We would like to work with you.';

        await this.sectionBecomeAPartner.scrollIntoView({ block: 'center', inline: 'center' });
        await this.fieldFullName.click();
        await browser.keys(fullName);
        await this.fieldCompanyName.click();
        await browser.keys(companyName);
        await this.fieldBusinessEmail.click();
        await browser.keys(businessEmail);
        await this.fieldMoreInformation.click();
        await browser.keys(moreInformation);
        await this.buttonSendMessage.click();
    }
}

module.exports = new PartnersPage();
