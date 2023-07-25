/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Registration', () => {
    it('should register with success', () => {
        const emailFaker = faker.internet.email();
        const passwordFaker = faker.internet.password();
        const nameFirst = faker.person.firstName();
        const nameLast = faker.person.lastName();

        cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
        
        cy.get('#email_create').type(emailFaker);
        cy.get('#SubmitCreate > span').click();
        
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(nameFirst);
        cy.get('#customer_lastname').type(nameLast);
        cy.get('#passwd').type(passwordFaker, { log: false });
        cy.get('#days').select('5');
        cy.get('#months').select('March');
        cy.get('#years').select('2001');

        cy.get('#submitAccount > span').click();

        cy.get('.alert')
            .should('be.visible')
            .and('contain', 'Your account has been created.');
        cy.get('.header_user_info  span')
        .should('contain', nameFirst, '' + nameLast);
    });
});