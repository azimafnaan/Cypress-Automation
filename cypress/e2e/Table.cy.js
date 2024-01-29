describe("Handle Tables", () => {
    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        cy.wait(3000);
        cy.get(".btn-close").click();
        cy.wait(3000);
        // Customers-->Customer
        cy.get("#menu-customer>a").click();
        cy.wait(3000);
        cy.get("#menu-customer>ul>li:first-child").click();
        cy.wait(3000);

    })

    it.skip('Check Numbers of Row & Column', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', '10');
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', '7');
    })
    it.skip('Check cell data from specific row and column', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(4)>td:nth-chi(3)').contains("gorankrezic90@gmail.com")
    })
    it.skip('Read all the rows & columns data in the first page', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get('td').each(($col, index, $cols) => {
                        cy.log($col.text());
                    })
                })
            })
    })
    it.only('Pagination', () => {
        //find total number of pages
        /* let totalPages;
         cy.get(".col-sm-6.text-end").then((e) => {
             let myText = e.text();
             totalPages = myText.substring(myText.indexOf("(") + 1, myText.indexOf("Pages") - 1);
             cy.log("Total Number pages in a table=======>" + totalPages);
         })*/

        let totalPages = 5;
        for (let p = 1; p <= totalPages; p++) {
            if (totalPages > 1) {
                cy.log("Active page is===" + p)
                cy.get("ul[class='pagination']>li:nth-child('+p+')").click();
                cy.wait(3000);
                cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get('td:nth-child(3)').then((e) => {
                                cy.log(e.text());//email
                            })
                        })
                    })
            }
        }

    })
})