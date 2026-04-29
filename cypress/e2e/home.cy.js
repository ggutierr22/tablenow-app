describe('Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') 
    cy.contains('TableNow') // Replace 'TableNow' with any text that actually appears on your landing page
  })
})
