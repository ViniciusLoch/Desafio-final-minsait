import Login from "../support/Pages/Login"
/// <reference types= 'cypress'/>


describe('Validando login and logout', ()=>{
    it('Validando login no sistema', ()=>{  
    Login.logar('Admin', 'admin123')
    cy.get('.oxd-userdropdown-tab').should('be.visible')
    })

    it('Validando logout do sistema', ()=>{  
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        cy.get('.orangehrm-login-branding > img').should('be.visible')     
    })
})