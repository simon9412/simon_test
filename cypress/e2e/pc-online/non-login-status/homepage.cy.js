/// <reference types="cypress" />
import { interceptHeaderLogo } from '@cypress/common/function/intercept.ts';
// const { interceptHeaderLogo } = require('@/cypress/common/function/intercept.ts');
const { isLoading } = require('../../../.././cypress/common/function/loading.ts');

describe('Home Page of PC Non Login status', () => {
    beforeEach(() => {
        interceptHeaderLogo();

        cy.visit('https://yumi.io');
        // cy.visit('https://tppkg-ziaaa-aaaal-qatrq-cai.raw.ic0.app');
    });

    it('test header UI', () => {
        // get header logo status code
        cy.wait(['@headerLogo'], { timeout: 6 * 1000 }).then((headerLogo) => {
            cy.log(headerLogo);
            expect(headerLogo.response.statusCode).to.eq(200);
        });

        // assert home page url
        cy.url().should('eq', 'https://tppkg-ziaaa-aaaal-qatrq-cai.raw.ic0.app/');

        // assert icon and text be visible
        cy.get('.header-box').then(header => {
            expect(header).be.visible;
            expect(header.find('.logo')).be.visible;
            expect(header.find('.h-r .menu-cells')).be.visible;
            expect(header.find('.h-r .wallet')).be.visible;

            expect(header.find('.h-r .menu-cell')).to.have.length(4);

            expect(header.find('.h-r .menu-cell').eq(0)).to.have.text('Launchpad');
            expect(header.find('.h-r .menu-cell').eq(1)).to.have.text('Market');
            expect(header.find('.h-r .menu-cell').eq(2)).to.have.text('ICOAT');
            expect(header.find('.h-r .menu-cell').eq(3)).to.have.text('Create');

            expect(header.find('.h-r .btn-wallet')).to.have.text('Connect Wallet');
        });
    });

    it('test header interaction', () => {
        cy.get('.header-box').then(header => {
            cy.get(header.find('.logo')).click();
            cy.url().should('eq', 'https://tppkg-ziaaa-aaaal-qatrq-cai.raw.ic0.app/');

            cy.get(header.find('.h-r .menu-cell').eq(0)).click();
            cy.url().should('eq', 'https://tppkg-ziaaa-aaaal-qatrq-cai.raw.ic0.app/launchpad');
            isLoading();
            cy.get('.card-item', { timeout: 20 * 1000 }).should('be.visible');
            cy.go('back');

            cy.get(header.find('.h-r .menu-cell').eq(1)).click();
            cy.url().should('eq', 'https://tppkg-ziaaa-aaaal-qatrq-cai.raw.ic0.app/market/collections');
            isLoading();
            cy.get('.collections-content', { timeout: 20 * 1000 }).should('be.visible');
            cy.go('back');

            cy.get(header.find('.h-r .menu-cell').eq(2)).click();
            cy.url().should('eq', 'https://tppkg-ziaaa-aaaal-qatrq-cai.raw.ic0.app/oat/oat-homepage');
            cy.get('.oat-conntent-main', { timeout: 10 * 1000 }).should('be.visible');
            cy.go('back');

            cy.get(header.find('.h-r .menu-cell').eq(3)).click();
            cy.url().should('eq', 'https://tppkg-ziaaa-aaaal-qatrq-cai.raw.ic0.app/applyform');
            cy.get('.formMain', { timeout: 10 * 1000 }).should('be.visible');
            cy.go('back');

            cy.get(header.find('.h-r .btn-wallet')).click();
            cy.get('.ant-modal-body', { timeout: 10 * 1000 }).should('be.visible');
            cy.get('.ant-modal-body > img').should('have.attr', 'src').and('contain', 'web/wallet/banner.png');

            cy.get('.option-cells').find('.option').as('loginChannel').should('have.length', 4);
            cy.get('@loginChannel').eq(0).should('contain.text', 'AstroX Me').and('be.visible');
            cy.get('@loginChannel').eq(1).should('contain.text', 'Plug').and('be.visible');
            cy.get('@loginChannel').eq(2).should('contain.text', 'Internet Identity').and('be.visible');
            cy.get('@loginChannel').eq(3).should('contain.text', 'Stoic').and('be.visible');

            cy.get('.ant-modal-body > .footer-box').as('loginFooter').should('be.visible');
            cy.get('@loginFooter').find('.footer-item').as('footerItem').should('have.length', 3);
            cy.get('@footerItem').eq(0).should('have.text', 'How to sign up a wallet?');
            cy.get('@footerItem').eq(1).should('have.text', 'Apply');
            cy.get('@footerItem').eq(2).should('have.text', 'Docs');

            cy.get('.powered').should('contain.text', 'Powered by').and('contain.text', 'Connect2IC');

            cy.get('.ant-modal-wrap').click();
            cy.get('.ant-modal-body').should('not.be.exist');
        });
    });

    it.only('test banner UI', () => {
        cy.get('.banner-wrapper .banner-box').should('be.visible');
        cy.get('.banner-wrapper .banner-inner').then((banner) => {
            expect(banner.find('.left-img')).to.be.visible;
            expect(banner.find('.left-text')).to.be.visible.and.have.text('Marketplace');
            expect(banner.find('.btn-explore')).to.be.visible.and.have.text('Explore');
            expect(banner.find('btn-create')).to.be.visible.and.have.text('Create');
        });
    });
});


