/// <reference types="cypress" />

describe("KLiknięcie w element na stornie", () => {
    it("kliknięcie w zakładkę Contact us", () => {
        cy.visit("/");
        cy.get('a[title="Contact us"]').click();
    })
})