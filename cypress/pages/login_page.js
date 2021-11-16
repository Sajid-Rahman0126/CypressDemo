export class LoginPage{

    usernameField = 'input[name="username"]'
    passwordField = 'input[name="password"]'
    loginBtn = 'input[value="Log In"]'

    navigate(url){
        cy.visit(url)
    }

    enterLoginCredentials(username, password){
        cy.get(this.usernameField)
            .type(username)
            .should('have.value', username)

        cy.get(this.passwordField)
            .type(password)
            .should('have.value', password)
    }

    clickLoginBtn(){
        cy.get(this.loginBtn).click();
    }
}