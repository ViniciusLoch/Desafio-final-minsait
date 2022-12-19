describe('Validar credenciais e forget your password', () => {
  it('Validando mensagem credenciais incorretas', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name=username]').type('Admin1')
    cy.get('input[name=password]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').should('be.visible')
  })
})