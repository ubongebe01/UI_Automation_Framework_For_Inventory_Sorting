/**
 * Login page class (Page Object Model)
 */


class Login_PO {
    //Visit the URL
    LaunchURL(){
    cy.visit('https://www.saucedemo.com/')
    .waitUntil(() => cy.url()
    .should('include', 'saucedemo'));
    }

    //Enter uername and password into thier respective fields and click on login button 
    Login(username, password) {
    cy.get('#user-name')
    .click()
    .type(username);
    cy.get('#password')
    .click()
    .type(password);
    cy.get('#login-button')
    .click();
    cy.title().should('eq', 'Swag Labs');
    }
}

export default Login_PO;

