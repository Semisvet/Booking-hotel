export const login = {
    url:'https://account.clario.co/login',
    emailSelector: '#email',
    emailValue: 'svitlana.a.mykytenko@gmail.com',
    passwordSelector:'#password',
    passwordValue: 'Svitlana123',
    loginButtonSubmit: '[type="submit"]',

    makeLogin() {
        cy.url({timeout: 10000}).should('includes', this.url);

        cy.get(this.emailSelector).type(this.emailValue);

        cy.get(this.passwordSelector).type(this.passwordValue);

        cy.get(this.loginButtonSubmit).click();

    }
}

