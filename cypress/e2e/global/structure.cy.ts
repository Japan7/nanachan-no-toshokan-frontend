describe('Site structure', () => {
  it('should display a navbar with Nanachan no Toshokan text on Home page', () => {
    cy.visit('/');
    cy.contains('nav', 'Nanachan no Toshokan')
      .should('be.visible');
  });

  it('should open and close the sidebar menu when clicking on the menu icon in the navbar on small screens', () => {
    cy.visit('/');

    cy.get('[data-cy="sidebar"]')
      .should('not.be.visible');
    cy.get('nav [data-cy="menu-button"]')
      .click();
    cy.get('[data-cy="sidebar"]')
      .should('be.visible');
    cy.get('nav [data-cy="menu-button"]')
      .click();
    cy.get('[data-cy="sidebar"]')
      .should('not.be.visible');
  });
});
