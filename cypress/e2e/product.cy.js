/// <reference types="cypress" />

describe('Product page tests', () => {
    it('should add in cart one product with success', () => {
        cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');

        cy.get('.button-container > .ajax_add_to_cart_button')
            .first()
            .click();
        cy.reload();

        cy.get('.shopping_cart > a').click();

        cy.get('#summary_products_quantity')
            .should('contain','1 product');

        cy.get('tbody tr')
            .should('be.visible')
            .and('have.length', 1);
    });
    it('should add in cart all product with success', () => {
        cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');

        cy.get('.button-container .ajax_add_to_cart_button').each(($el) => {
            cy.wrap($el).click();
            cy.get('.fancybox-item').click();
        })
           
        cy.reload();

        cy.get('.shopping_cart > a').click();

        cy.get('#summary_products_quantity')
            .should('contain','7 product');

        cy.get('tbody tr')
            .should('be.visible')
            .and('have.length', 7);
    });

    context('Cart', () => {
        it.only('should increase the amount of product when increasing', () => {
            cy.visit('http://www.automationpractice.pl/index.php?controller=order');
        });
    });
});