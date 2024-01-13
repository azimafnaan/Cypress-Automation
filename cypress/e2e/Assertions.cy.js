
describe("Assertions Demo", () => {
    it("Implicit Assertion", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // Should Assertion
        // cy.url().should('include', 'orangehrmlive.com')
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contains', 'https://opensource-demo')

        //multiple Assertion by using should keyword

        cy.url().should('include', 'orangehrmlive.com')
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contains', 'https://opensource-demo')

        // And Assertion
        cy.url().should('include', 'orangehrmlive.com')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'https://opensource-demo')
        cy.title().should('contain', 'Orange')
            .and('eq', 'OrangeHRM')
            .and('contain', 'HRM')

        //multiple assertions
        cy.get('.orangehrm-login-branding > img').should('be.visible')// logo visible
            .and('exist') // logo exists

        //check length
        cy.xpath('//a').should('have.length', 5)
    })
})