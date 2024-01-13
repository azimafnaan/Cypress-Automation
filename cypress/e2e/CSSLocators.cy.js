describe("CSSLocators", () => {
    it(cssLocators, () => {
        cy.visit("http://www.automationpractice.pl/index.php")

        // cy.get("#search_query_top").type("T-Shirts") //Id 
        // cy.get(".search_query").type("T-Shirt") //Class 
        // cy.get("[name='search_query']").type("T-Shirt") //attribute 
        cy.get("input.search_query[name='search_query']").type("T-Shirt") //Tag, Class & attribute
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("T-Shirts") //Assertions
    })
})