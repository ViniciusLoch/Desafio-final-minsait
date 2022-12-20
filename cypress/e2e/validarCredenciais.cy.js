describe('Validar credenciais e forget your password', () => {
  
  it('Validando mensagem credenciais incorretas', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name=username]').type('Admin1')
    cy.get('input[name=password]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').should('be.visible')
  })

  it('Validando forget yout password', () => {
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
    cy.get('.oxd-input').type('Admin')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-text--h6').should('be.visible')
  })
})