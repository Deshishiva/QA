describe('E-commerce Checkout Flow', () => {

  it('User should complete checkout process successfully', () => {

    // 1. Visit website
    cy.visit('https://www.saucedemo.com/')

    // 2. Login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // 3. Verify login success
    cy.url().should('include', 'inventory')

    // 4. Select first product
    cy.get('.inventory_item').first().click()

    // 5. Add to cart
    cy.contains('Add to cart').click()

    // 6. Go to cart
    cy.get('.shopping_cart_link').click()

    // 7. Verify cart page
    cy.contains('Your Cart').should('be.visible')

    // 8. Click checkout
    cy.get('#checkout').click()

    // 9. Fill checkout details
    cy.get('#first-name').type('Shiva')
    cy.get('#last-name').type('Kumar')
    cy.get('#postal-code').type('500072')

    // 10. Continue
    cy.get('#continue').click()

    // 11. Verify checkout overview page
    cy.contains('Checkout: Overview').should('be.visible')

    // 12. Finish order
    cy.get('#finish').click()

    // 13. Verify success message
    cy.contains('Thank you for your order!').should('be.visible')

  })

})