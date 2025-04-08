import { Given, Then, When, And } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/homepage.page.js';

Given('I visit Telnyx homepage', () => {
    HomePage.visit();
});
Then('I should see "Experience" on the page', (txt) => {
    HomePage.verifyTitle();
});

Then ('I should see essential menu links', () => {
    HomePage.verifyMenu();
});

Then ('I should see the title of the page', () => {
    HomePage.verifyPageTitle();
});

Then ('I should see the footer with links', () => {
    HomePage.verifyFooter();
});

Then ('I should see the navigation bar with links', () => {
    HomePage.verifyNav();
});

Then('I should see or not see main menu dependding on viewport resolution', () => {
    HomePage.viewportChangeCheck();
});