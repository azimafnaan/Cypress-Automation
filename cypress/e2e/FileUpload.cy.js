import "cypress-file-upload";

describe("File Uploads", () => {
    it("Single File Upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('test1.pdf');
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get(".example>h3").should("have.text", "File Uploaded!")
        cy.wait(3000);
        cy.get("#uploaded-files").contains("test1.pdf");
    })

    it.only("File Upload - Rename", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({ filePath: 'test1.pdf', fileName: 'myfile.pdf' });
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get(".example>h3").should("have.text", "File Uploaded!")
        cy.wait(3000);
        cy.get("#uploaded-files").contains("myfile.pdf");
    })

    it("File Upload - Drag and Drop", () => {

    })

    it("Multiple File Upload", () => {

    })

    it("File Upload - Shadow Dom", () => {

    })
})