describe('Validando acesso ao recruitment e realizando donwload do curriculo', ()=> {
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name=username]').type('Admin')
        cy.get('input[name=password]').type('admin123')
        cy.get('.oxd-button').click()
    })

    it('Acessando o recruitment', () => {
        cy.contains('span', 'Recruitment').click()
        cy.contains('h5', 'Candidates').should('be.visible')
    })

    it('Validando download de arquivo', () => {
        cy.contains('span', 'Recruitment').click()
        cy.get(':nth-child(13) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(3) > .oxd-icon').click()
        cy.readFile('cypress/downloads/resume.pdf').should('exist')        
    })
}) 