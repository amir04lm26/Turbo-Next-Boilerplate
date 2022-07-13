describe('render the main page', () => {
  it('have the correct title', () => {
    cy.visit('/')
    cy.get('section h2').first().should('have.text', 'Pages in Storybook')
  })
})
