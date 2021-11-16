import { LoginPage } from "../../pages/login_page"

let loginPage = new LoginPage()

describe('My First Test', function() {

    beforeEach(function(){
        cy.fixture('parabankLogin_test').then(function(app_data){
            this.app_data = app_data
        })
    })

        it('Navigate to the website', function (){

            loginPage.navigate('https://parabank.parasoft.com/parabank')

            cy.url().should('include', '/index.htm')

        })


        it('Input login credentials and click login', function(){

            loginPage.enterLoginCredentials(this.app_data.username, this.app_data.password)

            loginPage.clickLoginBtn()
            cy.url().should('include', '/overview.htm')
            // cy.contains('Welcome John Smith')
            //     .should('be.visible')
        })

        it('Verfiy Login was successful', function(){
            cy.url().should('include', '/overview.htm')
        })
})