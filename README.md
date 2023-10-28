# UI_Automation_Framework_For_Inventory_Sorting

This web automation framework is built with Cypress using JavaScript. It is built basically for automating the flow or process of e-commerce inventory sorting with few test scenarios. The web application used for demonstrating the working of this web testing framework is https://www.saucedemo.com/. This test ensures that the automation framework is able to carter for the sorting of goods in the inventory portal in both ascending and descending order. Below are the steps to clone and run this test locally and on CI.

#Steps to run this Cypress automated Inventory Test Framework locally  and on CI:

Locally:

1. Install VS Code editor and NodeJs on your local machine.

2. Clone this GitHub repository into your local machine.

3.  Once the Clone request is complete, open the Cypress Test Runner by running the following command in your VS Code terminal:

    npx cypress open - if you want to run in headed (browser) mode.

   This will launch the Cypress Test Runner where you can choose UI_Test_Automation_Framework.cy.js test file listed in the Spec. Click on the test to run it in the browser of your         choice.

4.  To run all the test, use the following command:

    npx cypress run

    npx cypress run --spec "UI_Test_Automation_Framework.cy.js"

6.  Cypress will generate reports for all test runs in the cypress/reporters/mochawesome-report directory. You can view these reports to check the results of your tests in html and Json     file formats.

On CI:

1.  Clone this GitHub repository onto your CI platform.

2.  Install the necessary dependencies, including Node.js and Cypress, on your CI platform. You can use a package manager like npm or yarn to install these dependencies.

3.  Set up your CI platform to run Cypress tests. This will typically involve creating a new job or task that executes a command to run the Cypress tests.

4.  Use the below command to run this Cypress tests using the Cypress CLI:

    cypress run --headless --browser chrome --spec "UI_Test_Automation_Framework.cy.js"

It's also worth noting that many CI platforms have built-in support for running Cypress tests, 
and you may be able to set up your tests using a graphical interface or wizard rather than manually configuring the job. 
