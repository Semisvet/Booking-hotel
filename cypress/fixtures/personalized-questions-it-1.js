export const personalizedQuestionsIt1 = {
    selectCategories(listCategories) {
        listCategories.forEach(function (category) {
            cy.get('li').contains(category).click();
        });
    },
    selectMultipleOptions(listOptions) {
        listOptions.forEach(function (option) {
            cy.get(option).click();
        });

        cy.get('[type="button"]').contains('Next').click();
    },
    mulipleNextClick(amount) {
        for(let i = 0; i < amount; i++) {
            cy.get('[type="button"]').contains('Next').click();
            cy.wait(100);
        }
    }
}

