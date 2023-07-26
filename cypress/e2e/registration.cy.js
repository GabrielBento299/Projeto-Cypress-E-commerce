/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Registration Page Tests', () => {
    context('Success Register', () => {
        it('should register with success', () => {
            const emailFaker = faker.internet.email();
            const nameFirst = faker.person.firstName();
            const nameLast = faker.person.lastName();
            const passwordFaker = faker.internet.password();
    
           cy.registration(emailFaker, nameFirst, nameLast, passwordFaker);
           cy.get('#submitAccount > span').click();

            cy.messageAlert('Your account has been created.');
            cy.get('.header_user_info  span')
                .should('contain', nameFirst, '' + nameLast);
        });
    });

    context('Error Register', () => {
        it('should display an error message when registering an email already registered', () => {
            const email = Cypress.env('user_email');
            cy.registration(email);
            
            cy.messageAlert('An account using this email address has already been registered. Please enter a valid password or request a new one.')
        });
    });
});