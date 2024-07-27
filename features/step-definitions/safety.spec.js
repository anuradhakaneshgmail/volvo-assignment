import { Given, When, Then, After } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

import SafetyPage from "../pageobjects/safety.page.js";

const pages = {
    safety: SafetyPage,
};

Given(/^User is on the (\w+) page$/, async (page) => {
    await pages[page].open();
});
Given(/^User accept cookies$/, async () => {
    await SafetyPage.acceptCookies();
});

When("User scroll to safety features", async () => {
    await SafetyPage.scrollToElement(await SafetyPage.buttonsSafetyFeatures[0]);
});

Then(/^User should see safety intro paragraph$/, async () => {
    await expect(SafetyPage.paraSafetyIntro).toBeExisting();
});

Then(/^User should see safety features and details$/, async () => {
    await SafetyPage.sliderSafetyFeaturesHeading.waitForStable({timeout:5000});

    await SafetyPage.buttonsSafetyFeatures.forEach(async (feature) => {
        await feature.waitForClickable({timeout : 5000});
        var featureText = await feature.getText();
        await expect(featureText).not.toBe(null);
    });
});

Then(/^User should see (.*) feature (.*)$/, async (title, details) => {
    await SafetyPage.scrollToElement(SafetyPage.titleZeroCollision);
    await expect(SafetyPage.titleZeroCollision).toHaveText(title);
    await expect(SafetyPage.paraZeroCollision).toHaveText(details);
});
