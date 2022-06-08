describe('Rendering and navigation', () => {
  it('should navigate between pages without crashing', () => {
    cy.visit('http://localhost:3000/about/');
    cy.findAllByText(/Spindrift/i).should('exist');
  });
});
