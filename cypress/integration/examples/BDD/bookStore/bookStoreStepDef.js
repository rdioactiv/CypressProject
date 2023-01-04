import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AbstractFuntions from "../../pageObjects/AbstractFunctions"
import SideBarOptions from "../../pageObjects/SideBarOptions"
import ProfilePage from "../../pageObjects/ProfilePage"
import LoginPage from "../../pageObjects/LoginPage"
import BookStore from "../../pageObjects/BookStore"
import FormPage from "../../pageObjects/FormPage"

// import AbstractFuntions from "cypress/integration/examples/pageObjects/AbstractFunctions.js"
// import SideBarOptions from "cypress/integration/examples/pageObjects/SideBarOptions.js"
// import ProfilePage from "cypress/integration/examples/pageObjects/ProfilePage.js"
// import LoginPage from "cypress/integration/examples/pageObjects/LoginPage.js"
// import BookStore from "cypress/integration/examples/pageObjects/BookStore.js"


const abstract = new AbstractFuntions()
const sideBarOptions = new SideBarOptions()
const profilePage = new ProfilePage()
const bookStore = new BookStore()
const loginPage = new LoginPage()
const formPage = new FormPage()
let name
let email
Given('Login to Profile', ()=>{
    cy.visit(Cypress.env('url') + "/books")
    abstract.getScrollBottom()
    sideBarOptions.getProfilePageMain().click()
    profilePage.getLogin().click()    
    loginPage.getUserName().type(globalThis.data.username)
    loginPage.getPassword().type(globalThis.data.password)
    loginPage.getLoginBtn().click()
    abstract.getScrollBottom
})

When('Add books to Profile', function(){
    profilePage.getBookstore().click()
        
    globalThis.data.bookName.forEach(function(element)  {
        cy.selectBook(element)
    });
})

When('Print Booknames to logs', function(){
    sideBarOptions.getProfilePageMain().click()
    
    cy.get('div.action-buttons').each((name, index, $list)=>{
        const nameOfBook=name.text()
        cy.log(nameOfBook) 
        })

    abstract.getScroll500()
})

Then('Delete books from Profile and Logout', function(){
    bookStore.getDeleteBooks().click({force: true})
    bookStore.getAlertOk().click()
    bookStore.getLogoutBtn().click()
})


Given('Open Forms Tab', function(){
    cy.visit(Cypress.env('url') + "/forms") 
})

When('Go to practice form', function(){
    abstract.getScroll300()
        sideBarOptions.getPracticeForm().click()
    
})

When('Fill the form',function(dataTable){
    name = dataTable.rawTable[1][0]
    email = dataTable.rawTable[1][1]
    formPage.getFirstName().type(dataTable.rawTable[1][0])
    formPage.getLastName().type(globalThis.data.lastname)
    formPage.getEmail().type(dataTable.rawTable[1][1])
    formPage.getGender().click()
})

Then('Validate the form', function(){
    formPage.getFirstName().should('have.value',name)
    formPage.getEmail().should('have.value',email)
    formPage.getButton().check().should('be.checked')
})