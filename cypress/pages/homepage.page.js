class HomePage {
    visit() {
        cy.visit('/');
    }
    verifyTitle(txt) {
        cy.contains("Experience").should('be.visible');
    }
    verifyMenu() {
        cy.get('#main-menu-content').find('button').should('have.length', 5);
        cy.get('#main-menu-content').find('a').should('have.length', 1);
    }

    verifyPageTitle(){
      cy.title().should('eq','Telnyx - Global solutions for Communications, IOT, AI, Compute and Networking');
    };

    verifyFooter() {
        cy.get('footer').should('be.visible');
        cy.get('footer').find('a').should('have.length.at.least', 8);
    }

    verifyNav(){
        cy.get('header').first('div').should('be.visible');
    };

    viewportChangeCheck(){
      cy.viewport(1000, 600);
      cy.get('#main-menu').should('not.be.visible');
      cy.viewport(1920, 1080);
      cy.get('#main-menu').should('be.visible');
    };

}
export default new HomePage();