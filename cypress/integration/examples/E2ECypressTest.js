/// <reference types="Cypress" />
import AbstractFuntions from "./pageObjects/AbstractFunctions"
import MainPage from "./pageObjects/MainPage"
import SideBarOptions from "./pageObjects/SideBarOptions"
import FormPage from "./pageObjects/FormPage"
import ProfilePage from "./pageObjects/ProfilePage"
import LoginPage from "./pageObjects/LoginPage"
import BookStore from "./pageObjects/BookStore"

describe('E2EWebsite',function(){

    before('data',()=>{
        cy.fixture('example').then(function(data){
            globalThis.data=data
        })
    })
    it('Forms',function(){
        const abstract = new AbstractFuntions()
        const mainPage = new MainPage()
        const sideBarOptions = new SideBarOptions()
        const formPage = new FormPage()
        const profilePage = new ProfilePage()
        const bookStore = new BookStore()
        const loginPage = new LoginPage()

        cy.visit(Cypress.env('url') + "/forms") 
        abstract.getScroll300()
        sideBarOptions.getPracticeForm().click()
    

        formPage.getFirstName().type(globalThis.data.firstname)
        formPage.getLastName().type(globalThis.data.lastname)
        formPage.getEmail().type(globalThis.data.email)
        formPage.getGender().click()

        //Assertions to check the form data
        formPage.getEmail().should('have.value',globalThis.data.email)
        formPage.getButton().check().should('be.checked')
  
        sideBarOptions.getBookStoreDropdown().click()
        sideBarOptions.getProfilePageMain().click()
        profilePage.getLogin().click()

        
        loginPage.getUserName().type(globalThis.data.username)
        loginPage.getPassword().type(globalThis.data.password)
        loginPage.getLoginBtn().click()
        abstract.getScrollBottom
        profilePage.getBookstore().click()
        
        globalThis.data.bookName.forEach(function(element)  {
            cy.selectBook(element)
        });
        sideBarOptions.getProfilePageMain().click()
        
        cy.get('div.action-buttons').each((name, index, $list)=>{
            const nameOfBook=name.text()
            cy.log(nameOfBook) 
            })

        abstract.getScroll500()
        bookStore.getDeleteBooks().click({force: true})
        bookStore.getAlertOk().click()
        bookStore.getLogoutBtn().click()

        })
        
        })
    
        
      
        
    

