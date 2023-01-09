/// <reference types="cypress" />

// const interceptFunction = () => {
//     cy.intercept({
//         method: 'GET',
//         url: 'https://storageapi.fleek.co/486b5a47-9186-4ffa-96ca-13fc31e44ce5-bucket/config/hot_collection.json'
//     }).as('headerLogo');
// };

const interceptHeaderLogo = () => {
    cy.intercept({
        method: 'GET',
        url: 'https://storageapi.fleek.co/2e97259f-b3cb-4b18-95cf-81a5abf27a25-bucket/web/logo.png'
    }, (req) => {
        // req.headers['cache-control'] = 'no-cache'; // add header
        // console.log(req); // print intercept
        req.reply((resp) => {
            resp.send({
                headers: { 'cache-control': 'no-store' }
            });
            // console.log(resp);
        });
    }).as('headerLogo');
};

export { interceptHeaderLogo };