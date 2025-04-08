import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import ContactUsPage from "../../pages/contactUs.page";

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore React minified errors
    if (err.message.includes('Minified React error')) {
        return false;
    }
});

Given('I visit Telnyx Contact Us page', () => {
    ContactUsPage.visit();
});

Then('I should see "Talk to an expert" on the page', () => {
    ContactUsPage.verifyTitle();
});

Then('I should see related resources on the page', () => {
    ContactUsPage.verifyResources();
});

Then('I should see the contact us page footer with links', () => {
    ContactUsPage.verifyFooter();
});