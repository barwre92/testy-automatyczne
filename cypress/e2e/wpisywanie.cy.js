/// <reference types="cypress" />

import base from "../PageObjectModel/base"; //zaimportowana klasa "base" z folderu PageObjectModel
import home from "../PageObjectModel/home";
import type from "../PageObjectModel/type";

describe("wpisywanie tekstu w wyszykiwarkę i przejście na podstronę Products", () => { 
    it("wpisywanie tekstu", () => {
        base.openHomePage(); //wykorzystany page object model (klasa "base", metoda "openHomePage")
        type.typeEmail();
        cy.wait(1000); 
        type.clearEmail();
        type.sendEmail();
    })
    it("kliknięcie w kategorię products", () => {
        base.openHomePage();
        home.clickOnProductsTab(); //wykorzystany page object model (klasa "home")
        cy.url().should("include", "/products") //ASERCJA (zawsze zaczyna się od SHOULD) - test sprawdza, czy pojawiły się słowa kluczowe w URL, tutaj: "/products". UWAGA - asercji nie wkłądamy do klas, muszą być dostępne z poziomu testów
    })
})