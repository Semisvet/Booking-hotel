describe('Clario questions 7.2.1', () => {
  it('should complete survey and open buy now page', () => {
    login.login('test@mail.com', 'EQWeqe');

    cy.visit('https://bg.sz.clario.co/bg/land/is-someone-spying-on-you-survey-mobile/it-7-2-1/q_phone_caught');

    cy.get('[for="q_phone_caught_yes"]').click();

    cy.get('[for="q_phone_left_no"]').click();

    cy.get('[for="q_passcode_not_sure"]').click();

    cy.get('[for="q_touchID_cant_remember"]').click();

    cy.get('input[placeholder="Other"]').type('Monkey');

    cy.get('#buttonAccept').click();

    cy.get('[for="q_age_18_24"]').click();

    cy.get('[for="q_age_spouse_25_34"]').click();

    cy.get('[for="q_relationship_harmony_and_trust"]').click();

    cy.get('[id="q_control_kindOf"]').click();

    cy.get('[for="q_plans_yes"]').click();

    cy.get('[for="q_calls_no"]').click();

    cy.get('[for="q_sm_conflicts_yes"]').click();

    cy.get('[for="q_text_contents_sometimes"]').click();

    cy.get('[id="q_sm_login_accounts_cant_recall"]').click();

    cy.get('[id="q_sm_private_private"]').click();

    cy.get('[for="q_sm_suspicious_req_no"]').click();

    cy.get('[for="q_location_spy_yes"]').click();

    cy.get('[for="q_findmy_no"]').click();

    cy.get('button#buttonAccept').contains('Okay, next').click();

    cy.get('[for="q_airtag_yes"]').click();

    cy.get('button#buttonAccept').contains('Noted').click();

    cy.get('#q_tech_savvy_good').click();

    cy.get('[for="q_phone_setup_no"]').click();

    cy.get('[for="q_unknown_apps_no"]').click();

    cy.get('[for="q_apps_recommended_yes"]').click();

    cy.get('[for="q_shared_apps_no"]').click();

    cy.get('[for="q_browsing_history_rarely"]').click();

    cy.url().should('include', 'https://bg.sz.clario.co/bg/land/is-someone-spying-on-you-survey-mobile/it-7-2-1/processing');

    cy.wait(3000);

    cy.get('#q_age_stop_it_now').click();

    cy.get('#q_protection_location').click();

    cy.get('#q_protection_camera').click();

    cy.get('[for="q_protection_call_privacy"]').click();

    cy.get('button#buttonAccept').contains('Next').click();

    cy.get('#q_protection_act_myself').click();

    cy.get('#q_protection_make_safe').click();

    cy.wait(4000);

    cy.url().should('include','https://bg.sz.clario.co/bg/pricing/week-plans');

  });

});