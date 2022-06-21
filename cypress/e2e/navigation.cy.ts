describe('Rendering and navigation', () => {
  it('should navigate between pages without crashing', () => {
    cy.visit('/about');
    cy.findAllByText(/Spindrift/i).should('exist');
  });
});
