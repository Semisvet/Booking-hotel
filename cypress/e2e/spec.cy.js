describe('Login Page', function () {
  it('login work', function() {
    cy.visit('https://google.com');

    cy.get('input[type="text"]').type('Прогноз погоди Львів{enter}');

    // cy.wait(1000);
    //
    // cy.get('.MUFPAc > :nth-child(2) > a', { timeout: 10000 }).should('be.visible').click();
  });

  it('reset password work', function () {
    cy.visit('https://google.com');

    cy.get('input[type="text"]').type('Прогноз погоди Хорол{enter}');

    // cy.wait(1000);
    //
    // cy.get('.MUFPAc > :nth-child(2) > a', { timeout: 10000 }).should('be.visible').click();
  });

  it('registration work', function () {
    cy.visit('https://google.com');

    cy.get('input[type="text"]').type('Прогноз погоди Хорол{enter}');

    // cy.wait(1000);
    //
    // cy.get('.MUFPAc > :nth-child(2) > a', { timeout: 10000 }).should('be.visible').click();
  });
});