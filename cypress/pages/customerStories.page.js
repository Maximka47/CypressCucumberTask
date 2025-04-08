class CustomerStoriesPage{

    visit(){
        cy.visit('/customer-stories');
    };

    verifyTitle(){
        cy.get('h1>span').should('have.text', 'Customer Stories');
    };

    verifyStories(){
        cy.get('main>section:nth-of-type(3)>div').should('have.length', 3);
    };

    verifyFooter() {
        cy.get('footer').should('be.visible');
        cy.get('footer').find('a').should('have.length.at.least', 8);
    }

}
export default new CustomerStoriesPage;