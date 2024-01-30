import "cypress-iframe";
require('@4tw/cypress-drag-drop')

describe("Mouse Operation", () => {

    it.skip("Mouse Hover", () => {
        cy.visit("https://demo.opencart.com/");
        cy.wait(300)
        // cy.get("div[class='dropdown-menu show'] li:nth-child(1) a:nth-child(1)").should("not.be.visible")
        cy.get("#narbar-menu>ul>li:nth-child(1)").trigger('mouseover').click();
        cy.get("div[class='dropdown-menu show'] li:nth-child(1) a:nth-child(1)").should("be.visible");
    })

    it.skip("Right Click", () => {
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

    it.skip("Double Click", () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick")
        cy.frameLoaded("#iframeResult");
        // Approach-1
        /* 
         cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick")
         cy.wait(3000);
         cy.iframe("#iframeResult").find("#demo").contains("Hello World")
         */
        // Approach-2
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
        cy.wait(3000);
        cy.iframe("#iframeResult").find("#demo").contains("Hello World")

    })

    it.skip("Drag and Drop using Plugin", () => {
        cy.visit("http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html");
        cy.wait(3000)
        cy.get("#box3").drag("#box103", { force: true })

    })

    it("Scrolling Page", () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(':nth-child(1) > tbody > :nth-child(16) > :nth-child(1) > img').scrollIntoView({ duration: 2000 })
        cy.get(':nth-child(1) > tbody > :nth-child(16) > :nth-child(1) > img').should("be.visible");
        cy.get('#footer').scrollIntoView({ duration: 2000 })

    })
})