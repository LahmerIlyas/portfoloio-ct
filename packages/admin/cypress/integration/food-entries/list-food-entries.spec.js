context('resources/FoodEntryEntity', () => {
  beforeEach(() => {
    cy.abLoginAPI({ password: Cypress.env('ADMIN_PASSWORD'), email: Cypress.env('ADMIN_EMAIL') })
    cy.visit('resources/FoodEntryEntity')
  })

  it('shows list of food entries', () => {
    cy.get('.adminjs_TableRow [data-property-name="food_name"]').should('have.length.gte', 1)
  })
})