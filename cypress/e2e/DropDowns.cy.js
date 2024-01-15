

describe("Handle Dropdown", () => {
    it.skip("Dropdown with Select Tag", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country')
            .select('India')
            //Assertions
            .should("have.value", "India")
    })

    it("DropDown without Select( Bootstrap)", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Italy").type('{enter}')
        cy.get("#select2-billing_country-container")
            .should('have.text', 'Italy')
    })
})