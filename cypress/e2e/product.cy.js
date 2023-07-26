/// <reference types="cypress" />

describe('Product Page and Cart Tests', () => {
    context('Adding Products to Cart', () => {
        it('should add in cart one product with success', () => {
            cy.productInCart();
            cy.get('.shopping_cart > a').click();
     
             cy.get('#summary_products_quantity')
                 .should('contain','1 product');
     
             cy.get('tbody tr')
                 .should('be.visible')
                 .and('have.length', 1);
         });
         it('should add in cart all product with success', () => {
             cy.allProductsInCart();
     
             cy.get('.shopping_cart > a').click();
     
             cy.get('#summary_products_quantity').should('contain','7 product');
     
             cy.get('tbody tr')
                 .should('be.visible')
                 .and('have.length', 7);
         });
    });

    context('Cart Functionality', () => {
        beforeEach(() => {
            cy.productInCart();
            cy.visit('http://www.automationpractice.pl/index.php?controller=order');
        });
        
        it('should increase the amount of product when increasing', () => {
            cy.get('#cart_quantity_up_1_1_0_0 > span').click();
            cy.reload();

            cy.get('.cart_quantity input[type="text"]').should('have.value', 2);
        });

        it('should decrease the amount of product when decreasing', () => {
            cy.get('#cart_quantity_up_1_1_0_0 > span').click();
            cy.reload();
            cy.get('.cart_quantity input[type="text"]').should('have.value', 2);
            
            cy.get('#cart_quantity_down_1_1_0_0 > span').click();
            cy.reload();
            cy.get('.cart_quantity input[type="text"]').should('have.value', 1);
        });

        it('should remove product in cart with success', () => {
            cy.get('.icon-trash').click();
            
            cy.get('.alert')
                .should('be.visible')
                .and('contain', 'Your shopping cart is empty.');
        });

        it('should add the product values when increasing the quantity', () => {
            cy.get('#total_price').should('contain', '$24');

            cy.get('#cart_quantity_up_1_1_0_0 > span').click();
            cy.reload();

            cy.get('#total_price').should('contain', '$41');
        });

        it('should decrease the o product values by decreasing the quantity', () => {
            cy.get('#total_price').should('contain', '$24');

            cy.get('#cart_quantity_up_1_1_0_0 > span').click();
            cy.reload();
            cy.get('#total_price').should('contain', '$41');

            cy.get('#cart_quantity_down_1_1_0_0 > span').click();
            cy.reload();

            cy.get('#total_price').should('contain', '$24');
        });
    });
});