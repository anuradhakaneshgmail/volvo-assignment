import { browser } from '@wdio/globals'
import { urls } from '../constants/urls.js'

export default class Page {
    async open (path) {
        await browser.url(urls.basePage+path)
        await browser.maximizeWindow();
    }
    async scrollToElement(element) {
        await element.scrollIntoView({ block: 'center', inline: 'center' });
    }
}
