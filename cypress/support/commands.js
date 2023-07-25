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

Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');

    if (email === '') {
        cy.get('#email').clear(); // Verifica se o campo de email está vazio
      } else {
        cy.get('#email').type(email);
      }
    
      if (password === '') {
        cy.get('#passwd').clear(); // Verifica se o campo de senha está vazio
      } else {
        cy.get('#passwd').type(password);
      }
    
      cy.get('#SubmitLogin').click();
});

Cypress.Commands.add('productInCart', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');

    cy.get('.button-container > .ajax_add_to_cart_button')
      .first()
      .click();
    cy.reload();
});

Cypress.Commands.add('allProductsInCart', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');

    cy.get('.button-container .ajax_add_to_cart_button').each(($el) => {
      cy.wrap($el).click();
      cy.get('.fancybox-item').click();
    });
           
    cy.reload();
});