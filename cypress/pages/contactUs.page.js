class ContactUsPage {
    visit() {
        cy.visit('/contact-us');
    };

    verifyTitle() {
        cy.get('h1').should('have.text', 'Talk to an expert');
    };

    verifyResources() {
        cy.get('ul').first().find('li').should('have.length', 4);
    };

    verifyFooter() {
        cy.get('footer').should('be.visible');
        cy.get('footer').find('a').should('have.length.at.least', 8);
    }
}
export default new ContactUsPage();