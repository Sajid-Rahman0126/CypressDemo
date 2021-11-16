describe('My First Test', function() {

    before(function(){
        cy.fixture('pbRegister_test').then(function(app_data){
            this.app_data = app_data
        })
    })
        it('Clicks an element', function (){
        cy.visit('https://parabank.parasoft.com/parabank')

        cy.url()
        .should('include', '/index.htm')

        cy.contains('Register').click()

        cy.get('input[name="customer.firstName"]')
            .should('be.visible')
            .type(this.app_data.firstname)

        cy.get('input[name="customer.lastName"]')
            .type(this.app_data.lastname)

        cy.get('input[name="customer.address.street"]')
            .type(this.app_data.address)  
            
        cy.get('input[name="customer.address.city"]')
            .type(this.app_data.city)
        
        cy.get('input[name="customer.address.state"]')
            .type(this.app_data.state)

        cy.get('input[name="customer.address.zipCode"]')
            .type(this.app_data.zip)

        cy.get('input[name="customer.phoneNumber"]')
            .type(this.app_data.phone)

        cy.get('input[name="customer.ssn"]')
            .type(this.app_data.ssn)

        cy.get('input[name="customer.username"]')
            .type(this.app_data.username)

        cy.get('input[name="customer.password"]')
            .type(this.app_data.password)

        cy.get('#repeatedPassword')
            .type(this.app_data.confirm)

        cy.get('input[value="Register"]').click();

    })
})