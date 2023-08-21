const { expect } = require('@wdio/globals');
const BlogPage = require('../pageobjects/blog.page');
const ArticlePage = require('../pageobjects/article.page');

describe('Blog', () => {

    before(async () => {
        await BlogPage.open()
        await BlogPage.buttonAcceptCookies.click();
      });

    it('Subscribe to NordPass news', async () => {
        await BlogPage.open()
        await BlogPage.articleFeatured.click();
        await ArticlePage.submitSubscribeForm();

        await expect(BlogPage.messageThankYou).toHaveText('Thank you for subscribing!');
    })

    it('Search articles by keyword', async () => {
        await BlogPage.open()
        await BlogPage.buttonSearch.click();
        await BlogPage.searchByKeyword('password');

        await expect(BlogPage.searchResultsHeaders).toHaveTextContaining('password');
    })
})
