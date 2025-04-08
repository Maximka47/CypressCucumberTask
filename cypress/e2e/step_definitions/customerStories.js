import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import CustomerStoriesPage from "../../pages/customerStories.page";

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore React minified errors
    if (err.message.includes('Minified React error')) {
        return false;
    }
});

Given ('I visit Telnyx Customer Stories page', () => {
    CustomerStoriesPage.visit();
});

Then('I should see "Customer Stories" on the page', () => {
    CustomerStoriesPage.verifyTitle();
});

Then('I should see customer stories on the page', () => {
    CustomerStoriesPage.verifyStories();
})

Then('I should see the customer stories page footer with links', () => {
    CustomerStoriesPage.verifyFooter();
});
