describe('Sample App Test', () => {
  it('loads the app and finds a button', () => {
    cy.visit('http://localhost:3000');
    cy.contains('button', 'Click Me').should('exist');
  });
}); 