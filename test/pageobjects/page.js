const { browser } = require('@wdio/globals')

module.exports = class Page {

    open (path) {
        return browser.url(`https://nordpass.com/${path}`)
    }

    get buttonAcceptCookies() {
        return $(`//button[text()='Accept all']`);
    }
}
