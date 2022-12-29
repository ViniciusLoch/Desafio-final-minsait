/// <reference types= 'cypress'/>

describe('Validando acesso ao admin, pesquisando usuario', () => {
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name=username]').type('Admin')
        cy.get('input[name=password]').type('admin123')
        cy.get('.oxd-button').click()
    })

    it('Validando search', () => {
        cy.get('.oxd-main-menu-search > .oxd-input').type('Admin')
        cy.get('.oxd-main-menu-item > .oxd-text').should('be.visible')
    })



    it('Validando acesso ao admin', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible')
    })

    


})