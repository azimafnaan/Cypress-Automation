describe("Handle Tables", () => {
    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click
        cy.get(".btn-close").click();

        // Customers-->Customer
        cy.get("#menu-customer>a").click();
        cy.get("#menu-customer>ul>li:first-child").click();

    })

    it('Check Numbers Row & Column', () => {

    })
    it('Check cell data from specific row and column', () => {

    })
    it('Read all the rows & columns data in the first page', () => {

    })
    it('Pagination', () => {

    })
})