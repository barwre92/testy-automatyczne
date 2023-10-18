import { typeSTH } from "../fixtures/typingData.json"

class typing {
get typeBox () {
    return cy.get("#susbscribe_email")
}

typeEmail () {
    this.typeBox.type(typeSTH);
}
clearEmail () {
    this.typeBox.clear();
}
sendEmail () {
    this.typeBox.type("barwre@wp.pl {enter}"); 
}
}

export default new typing()