const { $ } = require('@wdio/globals')
const Page = require('../page');

class TopNavigation extends Page {

    get tabBusiness() {
        return $(`//a[@data-testid='header-nav-business']`);
    }

    get tabPartners() {
        return $(`//a[text()='Partners']`);
    }

}

module.exports = new TopNavigation();