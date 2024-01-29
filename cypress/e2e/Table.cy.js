describe("Handle Tables", () => {
    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click();

        // Customers-->Customer
        cy.get("#menu-customer>a").click();
        cy.get("#menu-customer>ul>li:first-child").click();

    })

    it.skip('Check Numbers of Row & Column', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', '10');
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', '7');
    })
    it.skip('Check cell data from specific row and column', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(4)>td:nth-chi(3)').contains("gorankrezic90@gmail.com")
    })
    it.only('Read all the rows & columns data in the first page', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get('td').each(($col, index, $cols) => {
                        cy.log($col.text());
                    })
                })
            })
    })
    it.skip('Pagination', () => {

    })
})