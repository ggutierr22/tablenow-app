describe('Favorites Page', () => {
    it('should load the favorites collection', () => {
      cy.visit('http://localhost:8080/favorites')
      cy.get('body').should('be.visible')
    })
  })