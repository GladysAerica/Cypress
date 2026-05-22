describe('U5A4 – Automatización de acciones en formulario', () => {


    
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  
  it('interactuar con distintos elementos del formulario y validar resultados', () => {

    
    cy.contains('Commands').click()
    cy.contains('Actions').click()

    
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .clear()
      .type('estudiante@ejemplo.com')

    cy.get('.action-email')
      .should('have.value', 'estudiante@ejemplo.com')
    
    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .check()
   
    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .should('be.checked')
    
    cy.get('.action-radios [type="radio"]')
      .first()
      .check()
    
    cy.get('.action-radios [type="radio"]')
      .first()
      .should('be.checked')

    cy.get('.action-select')
      .select('fr-apples')

    cy.get('.action-select')
      .should('have.value', 'fr-apples')
   
    cy.get('.action-btn')
      .first()
      .click()
    
    cy.get('.action-btn')
      .first()
      .should('be.visible')
  })
})