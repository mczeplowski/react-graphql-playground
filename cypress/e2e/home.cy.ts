describe('HomePage', () => {
  it('search input contains a text from query params on page load', () => {
    cy.visit('http://localhost:3000?query=react');

    cy.get('input[placeholder="Search GitHub Repositories"]').should(
      'have.value',
      'react'
    );
  });

  it('renders different items after entering a phrase in search', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[placeholder="Search GitHub Repositories"]').type('antd');

    cy.get('.ant-table-row a')
      .first()
      .then($elem => {
        const text = $elem.text();

        cy.contains('Search').click();

        cy.url().should('include', 'query=antd');

        cy.contains('antd').should('exist');

        cy.contains(text).should('not.exist');
      });
  });

  it('renders different items after changing page', () => {
    cy.visit('http://localhost:3000?query=stars:>150000');

    cy.get('.ant-table-row a')
      .first()
      .then($elem => {
        const text = $elem.text();

        cy.get('li[title="2"]').click();

        cy.contains(text).should('not.exist');

        cy.get('li[title="Previous Page"]').click();

        cy.contains(text).should('exist');
      });
  });
});
