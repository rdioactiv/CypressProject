class FormPage{
    getFirstName(){
       return cy.get('#firstName')
    }
    getLastName(){
       return cy.get('#lastName')
    }
    getEmail(){
       return cy.get('#userEmail')
    }
    getGender(){
       return cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
    }
    getButton(){
        return cy.get('#gender-radio-1')
    }
    
   
}
export default FormPage