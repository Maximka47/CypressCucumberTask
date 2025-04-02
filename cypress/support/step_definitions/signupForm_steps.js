import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../e2e/pageobjects/homePage.js';

Given('I visit the Telnyx website', () => {
    cy.visit('https://telnyx.com/');
}
); 

When('I click on the "Sign up" button', () => {
    homepage.elements.signupBtn().first().click();
}
);
Then('I should see the sign-up form', () => {
    cy.url().should('include', '/sign-up');
    cy.get('form').should('exist');
}
);
