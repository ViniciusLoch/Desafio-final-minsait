/// <reference types= 'cypress'/>

describe('Validando login and logout', ()=>{
    it('Validando login no sistema', ()=>{  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name=username]').type('Admin')
    cy.get('input[name=password]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-userdropdown-tab').should('be.visible')
    })

    it('Validando logout do sistema', ()=>{  
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        cy.get('.orangehrm-login-branding > img').should('be.visible')     
    })
})