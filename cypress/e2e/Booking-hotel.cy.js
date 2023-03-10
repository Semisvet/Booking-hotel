describe('Booking', ()=>{
    it('reserve hotel', ()=>{
        const hotelName = 'Vogue Hotel Supreme Bodrum';

        cy.viewport(1502,1038);

        cy.visit('https://www.booking.com/index.html');

        cy.wait(3000);

        cy.get("body").then(body => {
            if (body.find('[role="dialog"]').length > 0) {
                //evaluates as true if button exists at all
                cy.get('[role="dialog"] button').click();
            }
        });

        cy.get('[name="ss"]').should('be.visible').focus().type(hotelName);

        cy.get('[data-testid="date-display-field-start"]').click();

        cy.get('[data-testid="searchbox-datepicker-calendar"] > [type="button"]').click();

        cy.get('[data-testid="searchbox-datepicker-calendar"] > [type="button"]:nth-child(2)').click().click().click();

        cy.get('[data-testid="searchbox-datepicker-calendar"] div div:nth-child(2) [role="grid"] [role="gridcell"]').contains('14').click();

        cy.get('[data-testid="searchbox-datepicker-calendar"] div div:nth-child(2) [role="grid"] [role="gridcell"]').contains('20').click();

        cy.get('[data-testid="occupancy-config"]').click();

        cy.get('[data-testid="occupancy-popup"] > div > div:nth-child(2) > div:nth-child(3) > button:nth-child(3)').click();

        cy.get('select[name="age"]').select('1');

        cy.get('[data-testid="occupancy-popup"] > button').click();

        cy.get('form > div > div:nth-child(4) > button').click();

        cy.get('[data-arp-properties-list="1"] [data-testid="property-card"]:first [data-testid="title-link"]').invoke('removeAttr', 'target').click({force: true});

        cy.get('h2.pp-header__title').contains(hotelName).should('be.visible');


    })
})
