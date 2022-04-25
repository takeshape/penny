describe('Rendering and navigation', () => {
  it('should navigate between pages without crashing', () => {
    cy.visit('http://localhost:3000');
    cy.findAllByText(/hello/i).should('exist');
    cy.findAllByText(/style guide/i).click();
    cy.findAllByText(/color palette/i).should('exist');
    cy.findAllByText(/home/i).click();
    cy.findAllByText(/hello/i).should('exist');
  });
});
