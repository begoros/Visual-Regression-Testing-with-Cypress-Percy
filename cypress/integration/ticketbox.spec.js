describe('Ticketbox', () => {
  it('Check for the initial state', () => {
    cy.visit(index.html);

    cy.percySnapshot();
  });
});
