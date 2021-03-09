/// <reference types="cypress" />

describe('Home Screen Test', () => {
    it('finds the basic buttons', () => {
        cy.visit('localhost:19006')

        cy.contains('Find')
        cy.contains('Search')
        cy.contains('Login')
    })
})
