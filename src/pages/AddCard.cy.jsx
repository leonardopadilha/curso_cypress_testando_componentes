import React from 'react'
import AddCard from './AddCard'

Cypress.Commands.add('alertErrorHaveText', (expectedText) => {
  cy.contains('.alert-error', expectedText)
    .should('be.visible')
})

describe('<AddCard />', () => {
  it('exibe erros quando os campos não são informados', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(1440, 900)
    cy.mount(<AddCard />)

    cy.contains('button', 'Adicionar Cartão').click()

    const alerts = [
      'Número do cartão é obrigatório',
      'Nome do titular é obrigatório',
      'Data de expiração é obrigatória',
      'CVV é obrigatório',
      'Selecione um banco'
    ]

    alerts.forEach((alert) => {
      cy.alertErrorHaveText(alert)
    })
  })

  it.only('deve cadastrar um novo cartão de crédito', () => {
    cy.viewport(1440, 900)
    cy.mount(<AddCard />)

    const myCard = {
      number: '4242424242424242',
      holderName: 'John Doe',
      expirationDate: '12/35',
      cvv: '123',
      bank: 'neon'
    }

    cy.contains('label', 'Número do Cartão')
      .parent()
      .find('input').type(myCard.number)

    cy.contains('label', 'Nome do Titular')
      .parent()
      .find('input').type(myCard.holderName)

    cy.contains('label', 'Validade')
      .parent()
      .find('input').type(myCard.expirationDate)

    cy.contains('label', 'CVV')
      .parent()
      .find('input').type(myCard.cvv)

    cy.get(`[data-cy="bank-${myCard.bank}"]`).click()
    //cy.contains('button', 'Neon').click()
    //cy.contains('button', 'Adicionar Cartão').click()

    cy.intercept('POST', 'http://wallet.cardfify.dev/api/cards', (req) => {
      req.reply({
        statusCode: 201,
        body: myCard
      })
    }).as('addCard')

    cy.get('[data-cy="saveMyCard"]').click()
    cy.wait('@addCard')
    cy.get('.notice-success')
      .should('be.visible')
      .and('have.text', 'Cartão cadastrado com sucesso!')
  })
})