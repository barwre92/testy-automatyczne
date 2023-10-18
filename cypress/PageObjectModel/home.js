class home {
get productTab() {
    return cy.get(`div.shop-menu a[href="/products"]`) //ten getter za każdym razem zwraca lokalizator Products
}

clickOnProductsTab() {
    this.productTab.click() // odczytuje getter i dodaje do niego finkcję CLICK
}
}

export default new home();