describe('U5A5: Flujo completo de navegación e interacción', () => {

  it('Debe completar el flujo interactivo y validar la navegación entre secciones', () => {
    
    // 1. Abrir la página principal
    cy.visit('https://example.cypress.io')

    // 2. Entrar a: Commands -> Actions
    cy.get('.navbar-nav').contains('Commands').click()
    cy.get('.dropdown-menu').contains('Actions').click()

    // 3. Realizar acciones en el formulario
    // Escribir texto en un campo (Email)
    cy.get('.action-email')
      .type('ejemplo@test.com')
      .should('have.value', 'ejemplo@test.com')

    // Seleccionar al menos 2 checkboxes habilitados (el primero y el tercero, saltando el deshabilitado)
    cy.get('.action-checkboxes [type="checkbox"]').eq(0).check().should('be.checked')
    cy.get('.action-checkboxes [type="checkbox"]').eq(2).check().should('be.checked')

    // Seleccionar un radio button
    cy.get('.action-radios [type="radio"]').first().check().should('be.checked')

    // Seleccionar una opción de una lista (select)
    cy.get('.action-select').select('oranges').should('have.value', 'fr-oranges')

    // 4. Navegar posteriormente a otra sección: Traversal
    cy.get('.navbar-nav').contains('Commands').click()
    cy.get('.dropdown-menu').contains('Traversal').click()

    // 5. Validar que aparezca el título correcto de la nueva sección
    cy.get('h1').should('contain', 'Traversal')

    // 6. Regresar a la página principal usando el logo de la barra de navegación
    cy.get('.navbar-brand').click()

    // 7. Validar que se visualice nuevamente el inicio: Kitchen Sink
    cy.get('h1').should('contain', 'Kitchen Sink')
    
  })

})