describe('Restaurants Page', () => {
    it('should load the restaurants page', () => {
      cy.visit('http://localhost:8080/restaurants')
      cy.get('body').should('be.visible')
    })
  })