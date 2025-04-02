class homePage {
    elements = {
        signupBtn: () => cy.get('a[href="/sign-up"]'),
    };
  visit() {
    cy.visit('https://example.com');
  }
}
module.exports = new homePage();
