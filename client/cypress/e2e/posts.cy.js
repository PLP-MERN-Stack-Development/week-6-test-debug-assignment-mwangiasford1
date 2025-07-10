describe('Posts E2E', () => {
  it('visits the home page and sees the posts list', () => {
    cy.visit('http://localhost:3000');
    cy.contains('h2', 'Posts').should('exist');
    // Wait for posts to load and check for at least one post item
    cy.get('ul').find('li').should('have.length.greaterThan', 0);
  });
}); 