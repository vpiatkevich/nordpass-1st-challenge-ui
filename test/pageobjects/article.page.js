const { $ } = require('@wdio/globals')
const Page = require('./page');
const { faker } = require('@faker-js/faker');

class ArticlePage extends Page {

    get headerSubscribeToNordPassNews () {
        return $(`//h2[text()='Subscribe to NordPass news']`)
    }

    get fieldEmail () {
        return $(`//span[@class='nord-input__wrapper relative inline-block w-full']`);
    }

    get buttonSubscribe () {
        return $(`button[type='submit']`);
    }

    get formSubscribe () {
        return $(`//form[@class='container--s mx-auto']`);
    }

    get messageThankYou () {
        return $(`//p[@class='nord-text text-micro leading-normal inline text-green']`);
    }

    async submitSubscribeForm() {
        let email = faker.internet.email();

        await this.formSubscribe.scrollIntoView();
        await this.fieldEmail.click();
        await browser.keys(email);
        await this.buttonSubscribe.click();
    }
}

module.exports = new ArticlePage();
