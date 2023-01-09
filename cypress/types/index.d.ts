/// <reference types="cypress" />

declare namespace Cypress {
  // declare your own command here
  interface Chainable<Subject> {
    /**
     * Create several Todo items via UI
     * @example
     * cy.createDefaultTodos()
     */
    // slideToNextVideo(): Chainable<any>

    // checkClipboard(checkFn: (text: string) => void): void;
    visitWithIntercept: (
      url: string,
      config?: {
        headers: { [key: string]: string };
        failOnStatusCode?: boolean;
      }
    ) => void;
    // login: () => void;
  }
}
