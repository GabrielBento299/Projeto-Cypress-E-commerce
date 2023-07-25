/// <reference types="cypress" />

describe('Success Login', () => {
    const email = Cypress.env('user_email');
    const password = Cypress.env('user_password');
    const firstName = Cypress.env('user_first_name');
    const lastName = Cypress.env('user_last_name');

    beforeEach(() => {
        cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
    });
    it('should login with success', () => {
        cy.get('#email').type(email);
        cy.get('#passwd').type(password);

        cy.get('#SubmitLogin > span').click();

        cy.get('.header_user_info  span')
            .should('contain', firstName, '' + lastName);
    });

    context('Errors Login', () => {
        it('should display an error message when entering invalid email', () => {
            cy.get('#email').type('teste@testeaewarawe.com');
            cy.get('#passwd').type(password);
    
            cy.get('#SubmitLogin > span').click();
    
            cy.get('.row .alert.alert-danger ')
                .should('be.visible')
                .and('contain', 'Authentication failed.');
        });
    
        it('should display an error message when entergin invalid password', () => {
            cy.get('#email').type(email);
            cy.get('#passwd').type('invalid');
    
            cy.get('#SubmitLogin > span').click();
            
            cy.get('.row .alert.alert-danger ')
                .should('be.visible')
                .and('contain', 'Authentication failed.');
        });
    
        it('should display an error message when not filling in the email field', () => {
            cy.get('#passwd').type('invalid');

            cy.get('#SubmitLogin > span').click();
            cy.get('.row .alert.alert-danger ')
                .should('be.visible')
                .and('contain', 'An email address required.');
        });
        it('should display an error message when not filling in the passowrd field', () => {
            cy.get('#email').type(email);

            cy.get('#SubmitLogin > span').click();
            cy.get('.row .alert.alert-danger ')
                .should('be.visible')
                .and('contain', 'Password is required.');
        });
    });
});