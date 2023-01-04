class ProfilePage{
    getLogin(){
        return cy.get('[href="/login"]')
    }
    getBookstore(){
        return cy.get('#gotoStore')
    }
   
}export default ProfilePage