context('resources/UserEntity', () => {
  beforeEach(() => {
    cy.abLoginAPI({ password: Cypress.env('ADMIN_PASSWORD'), email: Cypress.env('ADMIN_EMAIL') })
    cy.visit('resources/UserEntity')
  })

  it('shows list of users', () => {
    cy.get('.adminjs_TableRow [data-property-name="email"]').should('have.length.gte', 1)
  })
})