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
