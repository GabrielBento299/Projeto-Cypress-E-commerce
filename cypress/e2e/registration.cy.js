/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Registration page tests', () => {
    context('success register', () => {
        it('should register with success', () => {
            const emailFaker = faker.internet.email();
            const nameFirst = faker.person.firstName();
            const nameLast = faker.person.lastName();
            const passwordFaker = faker.internet.password();
    
           cy.registration(emailFaker, nameFirst, nameLast, passwordFaker);
           cy.get('#submitAccount > span').click();
    
            cy.get('.alert')
                .should('be.visible')
                .and('contain', 'Your account has been created.');
            cy.get('.header_user_info  span')
                .should('contain', nameFirst, '' + nameLast);
        });
    });

    context('Error register', () => {
        it('should display an error message when registering an email already registered', () => {
            const email = Cypress.env('user_email');
            cy.registration(email);
    
            cy.get('.row .alert.alert-danger ')
                .should('be.visible')
                .and('contain', 'An account using this email address has already been registered. Please enter a valid password or request a new one.');
        });
    });
});