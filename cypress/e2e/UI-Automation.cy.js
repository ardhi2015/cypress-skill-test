const locator = require("../page-object/locator");
import suburbData from '../page-object/suburb.json'
const base_url = Cypress.env('url_ui')

describe('empty spec', () => {
  it('passes', () => {
    cy.viewport(1440, 800)
    cy.visit(`${base_url}`)
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.get(locator.searchBar)
    cy.get(locator.searchBar).eq(1).type('Apply for a number plate{enter}', {force: true, delay: 0})

    cy.contains('for').should('be.visible')
    cy.contains('Apply').should('be.visible')

    cy.contains('Find locations').click()

    cy.get(locator.searchSuburb).focus().clear().type(`${suburbData.suburb1}{enter}`, {force: true, delay: 0})
    cy.contains('Rozelle Bay Maritime Service Centre').should('be.visible')

  })

  it('passes', () => {
    cy.viewport(1440, 800)
    cy.visit(`${base_url}`)
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.contains('Find locations').click()

    cy.get(locator.searchSuburb).focus().clear().type(`${suburbData.suburb1}{enter}`, {force: true, delay: 0})
    cy.contains('Rockdale Service Centre').should('be.visible')
  })
})