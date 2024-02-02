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

    it("File Upload - Rename", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({ filePath: 'test1.pdf', fileName: 'myfile.pdf' });
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get(".example>h3").should("have.text", "File Uploaded!")
        cy.wait(3000);
        cy.get("#uploaded-files").contains("myfile.pdf");
    })

    it.only("File Upload - Drag and Drop", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile('test1.pdf', { subjectType: 'drag-n-drop' });
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("test1.pdf");
    })

    it("Multiple File Upload", () => {

    })

    it("File Upload - Shadow Dom", () => {

    })
})