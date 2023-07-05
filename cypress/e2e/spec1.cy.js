describe('Lighthouse', () => {
  it('loads fast enough', () => {
    cy.visit('https://example.cypress.io')
    cy.lighthouse(
        {
          performance: 60,
        },
        {
          formFactor: 'desktop',
          screenEmulation: {
            mobile: false,
            disable: false,
            width: Cypress.config('viewportWidth'),
            height: Cypress.config('viewportHeight'),
            deviceScaleRatio: 1,
          },
        },
    )
  })
});