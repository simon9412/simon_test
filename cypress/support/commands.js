// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- This is visit command --
Cypress.Commands.add('visitWithIntercept', (url, config = {}) => {
      cy.intercept('*', req => {
        // console.log('MATCHED INTERCEPT'); //打印所有网络请求
        // req.headers['x-use-ppe'] = '1';
        // req.headers['x-tt-env'] = 'ppe_duoshan_01';
        // req.headers['x-forwarded-for'] = config?.headers?.['x-forwarded-for'];
      });
  
    cy.visit(url, config);
  });