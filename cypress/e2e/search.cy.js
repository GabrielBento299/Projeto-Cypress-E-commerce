/// <reference types="cypress" />

describe('Search', () => {
    beforeEach(() => {
        cy.visit('http://www.automationpractice.pl/index.php');
    });

   context('Success Search', () => {
        it('should display the product searched with success', () => {
            const productName = 'Blouse';

            cy.get('#search_query_top').type(productName);
            cy.get('#searchbox > .btn').click();
            cy.get('.right-block > h5 > .product-name').should('contain', productName);
        });
   });

    context('Errors Search', () => {
        it('should display error message when searching without product name', () => {    
            cy.get('#searchbox > .btn').click();
    
            cy.messageAlert('Please enter a search keyword');
        });
    
        it('should display error message when search one product nonexistent', () => {
            const nameProductNotExiste = 'Produto Indexistente';
            
            cy.get('#search_query_top').type(nameProductNotExiste);
            cy.get('#searchbox > .btn').click();
    
            cy.messageAlert('No results were found for your search');
        });
    });
});