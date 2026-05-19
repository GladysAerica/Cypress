describe('U5A3: Automatización de interacciones básicas', () => {

  it('Realiza acciones básicas en Cypress', () => {

    // 1. Abrir la página de Actions directamente
    cy.visit('https://example.cypress.io/commands/actions')

    // 2. Escribir información en el campo email
    cy.get('.action-email')
      .type('NombreUsuario@ejemplo.com')

    // 3. Dar clic en el botón
    cy.contains('Click to toggle popover')
      .click()

    // 4. Validar que aparezca un mensaje o texto
    cy.contains('This popover shows up on click')
      .should('be.visible')

  })

})