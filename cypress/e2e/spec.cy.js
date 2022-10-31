describe('empty spec', () => {
  beforeEach = () => {
    cy.visit('http://localhost:3000/')
  }

  it('verifty the site is live', () => {
    cy.visit('http://localhost:3000/')
  })

  it('verify banner text', () => {
    cy.get('.app-title').should('have.text','Turing Cafe Reservations')
  })

  it('can add text to fields and generate reservation card', () => {
    cy.get('[name="name"]').type('Catalyst')
    cy.get('[name="date"]').type('10/31')
    cy.get('[name="time"]').type('1200')
    cy.get('[name="guests"]').type('7')
    cy.get('.submit-res > button').click()

    cy.get('#Catalyst7').should('be.visible')
    cy.get('#Catalyst7 > :nth-child(1)').should('have.text','Catalyst')
  })
})