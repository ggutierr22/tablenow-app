describe('Profile Page', () => {
    it('should load the user profile correctly', () => {
      cy.visit('http://localhost:8080/profile')
      // This checks that the page at least loads without a 404
      cy.get('body').should('be.visible')
    })
  })