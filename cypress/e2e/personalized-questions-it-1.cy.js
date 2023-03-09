import {
    personalizedQuestionsIt1
} from '../fixtures/personalized-questions-it-1'


describe('personalized-questions-it-1', function () {
    // it('should complete survey and open buy now page', function () {
    //
    //     cy.visit('https://bg.sz.clario.co/bg/land/personalized-questions/it-1');
    //
    //     personalizedQuestionsIt1.selectCategories(
    //         ['Texts and calls', 'Device against spyware', 'Location', 'Social media accounts', 'Personal data', 'Browse in private'])
    //
    //     cy.get('[type="button"]').click();
    //
    //     cy.get('[for="phone-talks_yes"]').click();
    //
    //     cy.get('[for="call-recording_no"]').click();
    //
    //     cy.get('[for="phone-battery_yes"]').click();
    //
    //     cy.get('[for="know-your-location_no"]').click();
    //
    //     cy.get('[for="find-phone-in-diff-location_no"]').click();
    //
    //     cy.get('[for="phone-tracking_big-corporations"]').click();
    //
    //     cy.wait(1000);
    //
    //     cy.get('[for="know-your-location_no"]').click();
    //
    //     personalizedQuestionsIt1.selectMultipleOptions(
    //         ['[for="protect-social-accounts_instagram"]', '[for="protect-social-accounts_facebook"]']
    //     );
    //
    //     personalizedQuestionsIt1.selectMultipleOptions(
    //         ['[for="protect-personal-data_photos"]', '[for="protect-personal-data_contacts"]', '[for="protect-personal-data_passwords"]']
    //     );
    //
    //     cy.get('[for="phone-passcode_yes"]').click();
    //
    //     cy.get('[for="online-activity_browsing-history"]').click();
    //     cy.get('[for="online-activity_location-and-IP-address"]').click();
    //     cy.get('[type="button"]').contains('Next').click();
    //
    //     cy.wait(5000);
    //
    //     // cy.get('[type="button"]').contains('Next').click();
    //     //
    //     // cy.get('[type="button"]').contains('Next').click();
    //     //
    //     // cy.get('[type="button"]').contains('Next').click();
    //     //
    //     // cy.get('[type="button"]').contains('Next').click();
    //     //
    //     // cy.get('[type="button"]').contains('Next').click();
    //     //
    //     // cy.get('[type="button"]').contains('Next').click();
    //     //
    //     // cy.get('[type="button"]').contains('Next').click();
    //     //
    //     // cy.get('[type="button"]').contains('Next').click();
    //
    //     personalizedQuestionsIt1.mulipleNextClick(
    //         8
    //     )
    // });

    it('should complete personal data and location survey and open buy now page', function () {

        cy.visit('https://bg.sz.clario.co/bg/land/personalized-questions/it-1');

        personalizedQuestionsIt1.selectCategories(
            ['Location', 'Personal data']);

        cy.get('[type="button"]').click();

        cy.get('[for="find-phone-in-diff-location_yes"]').click();

        cy.get('[for="phone-tracking_friend"]').click();

        cy.get('[for="know-your-location_yes"]').click();

        personalizedQuestionsIt1.selectMultipleOptions(
            ['[for="protect-personal-data_messages"]', '[for="protect-personal-data_financial-data"]']
        );

        cy.get('[for="phone-passcode_no"]').click();

        cy.wait(5000);

        personalizedQuestionsIt1.mulipleNextClick(
            6
        );

        window.dispatchEvent(new Event('load'));
    });
});










