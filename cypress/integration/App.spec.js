import i18n from '../../src/i18n';

// EN is default
describe('landing page', () => {

    it('visits the site and refreshes session storage', () => {
        cy.window().then((win) => {
            win.sessionStorage.clear()
        })
        cy.visit('https://www.ovniaventures.online/')
    })

    it('ensures header exists and contains title and language toggle', () => {
        cy.get('header').should('exist')
        cy.get('header').find('button')
            .contains(i18n.getDataByLanguage('en').translation.headerLanguage)
            .should('exist')
    })

    it('ensures language changes from EN to FR after clicking language toggle', () => {
        cy.get('header').should('exist')
        cy.get('header').find('button')
            .filter(`:contains(${i18n.getDataByLanguage('en').translation.headerLanguage})`)
                .click()
        
        cy.get('header').find('button').should('contain', i18n.getDataByLanguage('fr').translation.headerLanguage)
    })

    it('ensures language changes from FR to EN after clicking language toggle', () => {
        cy.get('header').should('exist')
        cy.get('header').find('button')
            .filter(`:contains(${i18n.getDataByLanguage('fr').translation.headerLanguage})`)
                .click()
        
        cy.get('header').find('button').should('contain', i18n.getDataByLanguage('en').translation.headerLanguage)
    })

    it('ensures name input field exists and is initially empty', () => {
        cy.get('input').should('have.attr', 'placeholder', i18n.getDataByLanguage('en').translation.landingPlaceholderInputName)
    })

    it('ensures new game button is rendered properly', () => {
        // note that :contains is jquery
        cy.get('button').filter(`:contains(${i18n.getDataByLanguage('en').translation.landingLabelNewGame})`)
            .should('be.disabled')
    })

    it('ensures new game button is enabled after input is entered', () => {
        cy.get(`input[placeholder="${i18n.getDataByLanguage('en').translation.landingPlaceholderInputName}"]`).type('test name')
        cy.get('button').filter(`:contains(${i18n.getDataByLanguage('en').translation.landingLabelNewGame})`)
        .should('not.be.disabled')
    })

    it.skip('ensures click left arrow button moves backwards for character select', () => {
        cy.get('button').filter(`[data-testid="character-select-left"]`).click()
        cy.get('img').filter('[data-testid="character-select-image"]').should('have.attr', 'human3')
    })

    it.skip('ensures click right arrow button moves backwards for character select', () => {
        cy.get('button').filter(`[data-testid="character-select-right"]`).click()
        cy.get('img').filter('[data-testid="character-select-image"]').should('have.attr', 'human1')
    })

    it('ensures that we navigate to `/solo` after clicking the new game button with input', () => {
        cy.get('button').filter(`:contains(${i18n.getDataByLanguage('en').translation.landingLabelNewGame})`).click()
        cy.url().should('include', '/solo')
    })
})