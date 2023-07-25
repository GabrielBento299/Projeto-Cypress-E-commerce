Cypress.Commands.add('registration', (email, firstName, lastName, password) => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');

    cy.get('#email_create').type(email);
    cy.get('#SubmitCreate > span').click();
    
    if(!!firstName && !!lastName && !!password) {
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(firstName);
        cy.get('#customer_lastname').type(lastName);
        cy.get('#passwd').type(password, { log: false });
        cy.get('#days').select('21');
        cy.get('#months').select('March');
        cy.get('#years').select('2001');
    }
});