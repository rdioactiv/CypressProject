class BookStore{

    getDeleteBooks(){
       return cy.get('.buttonWrap > .text-right > #submit')
    }

    getAlertOk(){
       return cy.get('#closeSmallModal-ok')
    }
    
    getLogoutBtn(){
       return cy.get('#books-wrapper > .text-right > #submit')
    }
   


}
export default BookStore