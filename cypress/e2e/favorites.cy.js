describe('Favorites Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/favorites')
    })
  
    it('should load the favorites collection successfully', () => {
      cy.url().should('include', '/favorites')
    })
  
    it('should display a favorites list or an empty state message', () => {
      // This is a "robust" check: it passes if there are favorites OR 
      // if the app correctly says "You have no favorites yet"
      cy.get('body').then(($body) => {
        if ($body.text().includes('No favorites')) {
          cy.contains('No favorites').should('be.visible')
        } else {
          cy.get('.favorite-card').should('exist')
        }
      })
    })
  })