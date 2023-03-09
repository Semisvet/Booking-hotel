import {login} from'../fixtures/login'

describe('Clario authorization', function (){
    // const testEmailAddress = `test.${new Date().getTime()}@${Cypress.env("MAILISK_NAMESPACE")}.mailisk.net`;
    // const password = 'QWE12345Qq';

    // it('registration',async function (){
    //
    //     cy.viewport(1440, 800);
    //
    //     cy.visit('https://www.notion.so/signup');
    //
    //     cy.get('#notion-email-input-1').type(testEmailAddress);
    //
    //     cy.get('div[role="button"]').contains('Continue with email').click();
    //
    //     console.log(testEmailAddress);
    //
    //     cy.mailiskSearchInbox(Cypress.env("MAILISK_NAMESPACE"), {
    //         to_addr_prefix: testEmailAddress,
    //     }).then((response) => {
    //         console.log(response, 'response')
    //
    //         const emails = response.data;
    //         console.log(emails, 'email');
    //         const email = emails[0];
    //
    //         console.log(email);
    //     }, error => console.error(error));
    //
    //     cy.get('#notion-password-input-2').type('123');
    //
    //
    // })
    it('login should work',function (){
        cy.viewport(1440, 800);

        cy.visit('https://clario.co/');

        cy.get('.js-account-btn').click();

        cy.wait(1000);

       login.makeLogin()


        cy.get('.header__menu-link--logout').click();
    })
    //
    // it('Change password', function (){
    //
    //     cy.viewport(1440, 800);
    //
    //     cy.visit('https://clario.co/');
    //
    //     cy.get('.js-account-btn').click();
    //
    //     cy.url({timeout: 10000}).should('includes', 'https://account.clario.co/login');
    //
    //     cy.get('.form__link--login').click();
    //
    //     cy.url({timeout: 10000}).should('includes', 'https://account.clario.co/forgot');
    //
    //     cy.get('#email').type('svitlana.a.mykytenko@gmail.com');
    //
    //     cy.get('.button.button--primary.button--green').click();
    //
    //
    //
    // })
})
