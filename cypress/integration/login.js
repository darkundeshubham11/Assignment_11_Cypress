///<reference types="cypress"/>
describe('OpenMRS Automation', () => {
  before(() => {
    // Visit the login page
    cy.visit('https://demo.openmrs.org/openmrs/login.htm');
  });

  it('Should log in to OpenMRS', () => {
    // Enter username
    cy.get('#username').type('admin');

    // Enter password
    cy.get('#password').type('Admin123');

    // Use XPath to select location
    cy.xpath('//li[@id="Inpatient Ward"]').click();

    // Click on login button
    cy.get('#loginButton').click();

    // Verify login
    cy.url().should('include', 'https://demo.openmrs.org/openmrs/referenceapplication/home.page');
  });

  it('Should handle dynamic dropdown', () => {
    // Assume we're already logged in

    // Navigate to a page with a dynamic dropdown
    cy.visit('https://demo.openmrs.org/some_page_with_dropdown');

    // Click to open the dropdown
    cy.get('.dropdown-class').click();

    // Wait for dropdown options to be visible
    cy.get('.dropdown-options').should('be.visible');

    // Select an option dynamically
    cy.get('.dropdown-options > li').contains('Option Text').click();

    // Assert the selected option
    cy.get('.selected-option-display').should('contain', 'Option Text');
  });

  it('Should handle alerts', () => {
    // Trigger an action that causes an alert
    cy.get('#alertButton').click();

    // Handle and assert the alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Expected Alert Text');
    });
  });
});


