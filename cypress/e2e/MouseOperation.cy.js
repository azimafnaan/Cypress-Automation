describe("Mouse Operation", () => {

    it.skip("Mouse Hover", () => {
        cy.visit("https://demo.opencart.com/");
        cy.wait(300)
        // cy.get("div[class='dropdown-menu show'] li:nth-child(1) a:nth-child(1)").should("not.be.visible")
        cy.get("#narbar-menu>ul>li:nth-child(1)").trigger('mouseover').click();
        cy.get("div[class='dropdown-menu show'] li:nth-child(1) a:nth-child(1)").should("be.visible");
    })

    it.only("Right Click", () => {

    })

    it("Double Click", () => {

    })

    it("Drag and Drop using Plugin", () => {

    })

    it("Scrolling Page", () => {

    })
})