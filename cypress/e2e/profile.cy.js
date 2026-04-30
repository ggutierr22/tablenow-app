describe('Profile Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/profile')
    })
  
    it('should load the user profile successfully', () => {
      // Verifies the page header is visible
      cy.get('h1').should('be.visible').and('not.be.empty')
    })
  
    it('should display account settings options', () => {
      // Proves the page has actual functional content
      cy.get('body').should('contain', 'Settings')
      cy.get('button').contains('Edit').should('be.visible')
    })
  })