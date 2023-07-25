/// <reference types="cypress" />

describe('Login page tests', () => {
    const email = Cypress.env('user_email');
    const password = Cypress.env('user_password');
    const firstName = Cypress.env('user_first_name');
    const lastName = Cypress.env('user_last_name');
    
   context('Success login', () => {
        it('should login with success', () => {
            cy.login(email, password);

            cy.get('.header_user_info  span')
                .should('contain', firstName, '' + lastName);
        });
   });

    context('Errors Login', () => {
        it('should display an error message when entering invalid email', () => {
            cy.login('teste@testeaewarawe.com', password);
        
            cy.get('.row .alert.alert-danger ')
                .should('be.visible')
                .and('contain', 'Authentication failed.');
        });
    
        it('should display an error message when entergin invalid password', () => {
            cy.login(email, 'password');
                
            cy.get('.row .alert.alert-danger ')
                .should('be.visible')
                .and('contain', 'Authentication failed.');
        });
    
        it('should display an error message when not filling in the email field', () => {
            cy.login('', password);

            cy.get('.row .alert.alert-danger ')
                .should('be.visible')
                .and('contain', 'An email address required.');
        });
        it('should display an error message when not filling in the passowrd field', () => {
            cy.login(email, '');

            cy.get('.row .alert.alert-danger ')
                .should('be.visible')
                .and('contain', 'Password is required.');
        });
    });
});