class MainPage{
    getForms(){
        return cy.get('.category-cards > :nth-child(2)')
    }
}export default MainPage