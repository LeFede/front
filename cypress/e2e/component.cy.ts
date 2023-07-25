describe('a', () => {
  it('b', () => {
    cy.visit('http://localhost:5173')

    cy.get('h1')
      .should('have.html', 'Vite + React')
      .click()
      .should('have.html', 'asd')
  })
})
