import { $ } from '@wdio/globals'
import Page from './page.js';
import { urls } from '../constants/urls.js';

class SafetyPage extends Page {
    get buttonAcceptCookies () {
        return $('#onetrust-accept-btn-handler');
    }
    get paraSafetyIntro () {
        return $('//*[@id="ModelIntro-2"]/section//p');
    }

    get buttonsSafetyFeatures() {
        return $$('//*[contains(@id,"SliderWithIcons")]//button[contains(@data-autoid,"sliderWithIcons:title")]/div/div[2]/*');
    }
    get sliderSafetyFeaturesHeading() {
        return $('#operational-emissions  h3');
    }
    get titleZeroCollision() {
        return $('//*[@id="ModelIntro-4"]/section/div/h2');
    }
    get paraZeroCollision() {
        return $('//*[@id="ModelIntro-4"]/section/div//p');
    }

    async acceptCookies() {
        await this.buttonAcceptCookies.click();
    }
    async safetyIntroText() {
       return await this.paraSafetyIntro.getText();
    }
    open () {
        return super.open(urls.safetyPage);
    }
}

export default new SafetyPage();
