describe('Validar credenciais e forget your password', () => {
  it('Validando mensagem credenciais obrigatorias', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.contains('button', 'Login').click()
    cy.contains('span', 'Required').should('be.visible')
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible')
  })


  it('Validando mensagem credenciais incorretas', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name=username]').type('Admin1')
    cy.get('input[name=password]').type('admin123')
    cy.contains('button', 'Login').click()
    cy.contains('p', 'Invalid credentials').should('be.visible')
  })

  it('Validando forget yout password', () => {
    cy.contains('p', 'Forgot your password? ').click()
    cy.get('.oxd-input').type('Admin')
    cy.contains('button', ' Reset Password ').click()
    cy.contains('h6','Reset Password link sent successfully').should('be.visible')
  })
})