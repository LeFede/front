describe('a', () => {
  it('b', () => {
    cy.visit('http://localhost:5173')
    cy.get('h1').should('have.html', 'hola')
    cy.visit('http://localhost:5173/12312')
    cy.get('h1').should('have.html', 'Not Found')
  })
})
