describe('Hola Mundo', () => {

  it('Debe abrir la página correctamente', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('Kitchen Sink')

  })

})