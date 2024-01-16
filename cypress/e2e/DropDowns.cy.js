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

    it.skip("DropDown without Select( Bootstrap)", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Italy").type('{enter}')
        cy.get("#select2-billing_country-container")
            //Assertion
            .should('have.text', 'Italy')
    })

    it.skip("Auto Suggest Dropdown", () => {
        cy.visit("https://www.wikipedia.org/");
        cy.get("#searchInput").type('Bangladesh')
        cy.get(".suggestion-title").contains("Bangladesh Army").click()
        cy.get('.mw-page-title-main').should('have.text', 'Bangladesh Army')
    })

    it("Dynamic Auto Suggest DropDown", () => {
        cy.visit("https://www.google.com/");
        cy.get("textarea[name='q']").type('us')
        cy.get("div.wM6W7d>span").should("have.length", 13)
        cy.get("div.wM6W7d>span").each(($el, index, $list) => {
            if ($el.text() === 'USA') {
                cy.wrap($el).click();
            }
        })
        cy.get("textarea[name='q']").should("have.text", "usa")
    })
})