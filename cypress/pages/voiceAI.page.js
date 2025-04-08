class VoiceAIPage{
    visit(){
        cy.visit('/products/voice-ai');
    }

    verifyTitle(){
        cy.get('#private-and-secure-ai').should('be.visible');
    }

    verifyFooter() {
        cy.get('footer').should('be.visible');
        cy.get('footer').find('a').should('have.length.at.least', 8);
    }

    verifyFeatures(){
        cy.get('div[role="tablist"]').find('button').should('have.length.at.least', 5);
    }

}
export default new VoiceAIPage();