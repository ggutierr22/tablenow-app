ddescribe('Restaurants Page', () => {
    // This runs before every "it" block below
    beforeEach(() => {
      cy.visit('http://localhost:8080/restaurants')
    })
  
    it('should load the page successfully', () => {
      cy.get('body').should('be.visible')
    })
  
    it('should allow a user to search for a restaurant', () => {
      // 1. Find the search input and type 'american'
      cy.get('input').first().type('american{enter}')
  
      // 2. Assert the URL changed to include the search query
      cy.url().should('include', 'search=american')
  
      // 3. Verify that results are displayed
      // Tip: If your app is case-sensitive, ensure 'American' matches your UI
      cy.get('body').should('contain', 'American') 
    })
  })
  