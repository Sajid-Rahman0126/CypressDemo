
describe('My First Test', function() {

    before(function(){
        cy.fixture('ap_test').then(function(app_data){
            this.app_data = app_data
        })
    })
        it('Clicks an element', function (){
        cy.visit('http://automationpractice.com/')

        cy.url()
        .should('include', '/index.php')
        
        cy.get('#search_query_top', {timeout:6000})
            .type(this.app_data.searchCriteria)
            .should('have.value', this.app_data.searchCriteria)


         cy.get('.button-search').click()

         cy.contains('Printed Summer Dress').click();
    })
})