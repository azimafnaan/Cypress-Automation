import "cypress-file-upload";

describe("File Uploads", () => {
    it.only("Single File Upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('test1.pdf');
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get(".example>h3").should("have.text", "File Uploaded!")
        cy.wait(3000);
        cy.get("#uploaded-files").contains("test1.pdf");
    })

    it("File Upload - Rename", () => {

    })

    it("File Upload - Drag and Drop", () => {

    })

    it("Multiple File Upload", () => {

    })

    it("File Upload - Shadow Dom", () => {

    })
})