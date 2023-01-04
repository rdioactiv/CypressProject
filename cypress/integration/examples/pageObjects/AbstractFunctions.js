class AbstractFuntions{
    getScroll300(){
        return cy.scrollTo(0, 300)
    }
    getScroll500(){
        return cy.scrollTo(0, 500)
    }
    getScrollBottom(){
        return cy.scrollTo('bottom')
    }
  
}export default AbstractFuntions