/// <reference types="cypress" />

describe('Home Screen Test', () => {
    it('finds the basic buttons', () => {
        cy.visit('localhost:19006')

        cy.contains('What plants')
        cy.contains('Search plants')
        cy.contains('Login')
    })
})
