const { $ } = require('@wdio/globals')
const Page = require('./page');
const { faker } = require('@faker-js/faker');

class BlogPage extends Page {

    get articleFeatured () {
        return $(`//div[contains(@class,'Article--featured')]`)
    }

    get buttonSearch () {
        return $(`//div[@class='hidden md:flex']//button[@type='button']`);
    }

    get fieldSearch () {
        return $(`//input[@id='search']`);
    }

    get searchResultsHeaders () {
        return $$(`//h3`);
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

    async searchByKeyword(keyword) {
        await this.fieldSearch.setValue(keyword);
        await this.buttonSearch.click();
    }

    open () {
        return super.open('blog');
    }
}

module.exports = new BlogPage();
