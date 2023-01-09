/// <reference types="cypress" />

const isLoading = (isloading = true) => {
    if (isloading) {
        cy.get('.loading').should('be.visible');
    }
};


export { isLoading };
