/// <reference types="cypress" />
import { practiceSelectors } from "../Utils/selectors.js";

describe("Different cases : In JS", () => {

  const arr = [];
  it("Paginated webTable sorting", () => {
    cy.visit("https://datatables.net/examples/basic_init/alt_pagination.html");
    cy.get("#example > tbody > tr > td:nth-child(1)").should("be.visible");
    cy.wait(3);
    cy.get("#example_paginate").scrollIntoView();

    const clickNextPage = () => {
      cy.get("a#example_next").then(($next) => {
        cy.get("#example > tbody > tr > td:nth-child(1)").each(($el) => {
          let text = $el.text();
          arr.push(text);
        });
        cy.wait(500); // to avoid flaky 
        if ($next.hasClass("disabled")) {
          let comp = Cypress._.sortBy(arr);
          expect(arr).to.deep.equal(comp);
          return;
        }
        cy.get("#example_next").click();
        clickNextPage();
      });
    };
    clickNextPage();
  });

});
