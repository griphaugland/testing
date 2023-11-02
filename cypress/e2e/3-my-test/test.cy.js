describe("Check with correct password", () => {
  it("should search for a word", () => {
    cy.visit("index.html");
    cy.get("#test").type("Jonathan liker gutter{enter}", { delay: 250 });
    cy.get("#password").type("password{enter}", { delay: 250 });
    cy.get("#result").should("have.text", "You are in!", { delay: 250 });
  });
  it("Check with wrong password", () => {
    cy.visit("index.html");
    cy.get("#test").type("Jonathan liker gutter{enter}", { delay: 250 });
    cy.get("#password").type("passwor{enter}", { delay: 250 });
    cy.get("#result").should("have.text", "Wrong password!", { delay: 250 });
  });
});
