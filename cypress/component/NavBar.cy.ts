import NavBar from '../../components/NavBar';

describe('<NavBar>', () => {
  beforeEach(() => {
    cy.mount(NavBar());
  });

  it('is a "nav" element', () => {
    cy.get('[data-cy-root] > nav')
      .should('be.visible');
  });

  it('has a title part', () => {
    cy.get('nav [data-cy="title"]');
  });

  it('displays "Nanachan no Toshokan" in its title', () => {
    cy.get('[data-cy="title"]')
      .should('have.text', 'Nanachan no Toshokan');
  });
});
