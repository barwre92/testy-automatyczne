class base {
    openHomePage () { // nowa metoda
        cy.visit("https://automationexercise.com/")
    }
}

export default new base ();