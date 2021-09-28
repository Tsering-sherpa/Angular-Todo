describe('Auth --> Register Tests', () => {
  it('allows the user to signup for a new account', () => {
    cy.visit('/register')
    cy.get('#mat-input-0').type('Tsering Sherpa')
    cy.get('.mat-radio-group').type('Other')
    cy.get('#mat-input-1').type('9/8/2021')
    // cy.get('.mat-select').type('US')
    cy.get('#mat-input-2').type('986967527')
    cy.get('#mat-input-3').type('tseringws13@gmail.com')
    cy.get('button').contains('Next').click()

    cy.url().should('include', '/set-password')
    cy.visit('/set-password')
    cy.get('#mat-input-0').type('Nep@1234')
    cy.get('#mat-input-1').type('Nep@1234')
    cy.get('.mat-raised-button').contains('Signup').click()
    cy.url().should('include', '/login')
  })
})