import { ERRORS } from '../../src/errors'

describe('Home', () => {
  it('renders correctly', () => {
    cy.visit('http://localhost:5173')
    cy.get('h1').should('have.html', 'Volpe IT')
    cy.get('h2').should('have.html', 'dream a better world')
  })
})

describe('Form', () => {
  it('works as expected', () => {
    cy.visit('http://localhost:5173/form')

    const nameInput = cy.get('input#name')
    const passwordInput = cy.get('input#password')
    const confirmPasswordInput = cy.get('input#confirmPassword')
    nameInput.type('hello').should('have.value', 'hello').clear().type('1j')
    cy.contains(ERRORS.START_WITH_LETTER)

    passwordInput.type('hello').should('have.value', 'hello').clear().type('1j')
    cy.contains(ERRORS.PASSWORD_LENGTH)
    cy.contains(ERRORS.PASSWORDS_NOT_MATCH)

    confirmPasswordInput
      .type('hello')
      .should('have.value', 'hello')
      .clear()
      .type('1j')

    cy.contains(ERRORS.PASSWORDS_NOT_MATCH).should('not.exist')

    nameInput.clear().type('volpe')
    passwordInput.clear().type('12345678')
    confirmPasswordInput.clear().type('12345678')

    cy.contains(ERRORS.PASSWORDS_NOT_MATCH).should('not.exist')
    cy.contains(ERRORS.PASSWORD_LENGTH).should('not.exist')
    cy.contains(ERRORS.START_WITH_LETTER).should('not.exist')

    const submit = cy.get('#submit')
    submit.click()
    const formModalInput = cy.get('#form-modal-confirm')
    formModalInput.click()

    nameInput.should('have.value', '')
    passwordInput.should('have.value', '')
    confirmPasswordInput.should('have.value', '')
  })
})
