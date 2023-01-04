class LoginPage{

     getUserName(){
       return cy.get('#userName')
    }
     getPassword(){
       return cy.get('#password')
    }
     getLoginBtn(){
       return cy.get('#login')
    }
 
}export default LoginPage