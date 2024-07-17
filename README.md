# Assignment-11-Cypress
# OpenMRS Automation Tests

This repository contains automated tests using Cypress for the OpenMRS application.

## Prerequisites

Before running the tests, ensure you have the following installed:
- Node.js
- Cypress

## Getting Started

Clone the repository:
```bash
git clone <repository-url>
cd <repository-directory>
#Install dependencies:
npm install
Running Tests
To run the tests using Cypress:
npm run cypress:open
This will open the Cypress Test Runner. Click on the test file openmrs.spec.js to run the tests.

Test Cases
1. Login to OpenMRS
Enter valid username and password.
Select a location using XPath.
Click on the login button.
Verify successful login by checking the URL.
2. Handling Dynamic Dropdown
Navigate to a page with a dynamic dropdown.
Click to open the dropdown.
Wait for dropdown options to be visible.
Select a specific option and verify the selection.
3. Handling Alerts
Trigger an action that causes an alert.
Handle the alert and verify the alert text.
# Code
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
