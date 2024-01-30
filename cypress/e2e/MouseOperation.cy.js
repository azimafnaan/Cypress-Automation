describe("Mouse Operation", () => {

    it.skip("Mouse Hover", () => {
        cy.visit("https://demo.opencart.com/");
        cy.wait(300)
        // cy.get("div[class='dropdown-menu show'] li:nth-child(1) a:nth-child(1)").should("not.be.visible")
        cy.get("#narbar-menu>ul>li:nth-child(1)").trigger('mouseover').click();
        cy.get("div[class='dropdown-menu show'] li:nth-child(1) a:nth-child(1)").should("be.visible");
    })

    it.only("Right Click", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.wait(300)
        // Approach -1
        /*
        cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
         cy.get('.context-menu-icon-copy').should("be.visible");
         cy.get('.context-menu-icon-copy').click();
        */
        //Approach-2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get('.context-menu-icon-copy').should("be.visible");

    })

    it("Double Click", () => {

    })

    it("Drag and Drop using Plugin", () => {

    })

    it("Scrolling Page", () => {

    })
})