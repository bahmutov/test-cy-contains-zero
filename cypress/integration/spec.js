it('contains string zero', () => {
  cy.visit('index.html')
  cy.get('#zero').contains('0')
})

it('contains number zero', () => {
  cy.visit('index.html')
  cy.get('#zero').contains(0)
})
