class SideBarOptions{

    getPracticeForm(){
        return cy.get(':nth-child(2) > .element-list > .menu-list > #item-0')
    }
   
    getBookStoreDropdown(){
        return cy.get(':nth-child(6) > .group-header > .header-wrapper > .header-right')
    }
    getLoginMain(){
        return cy.get(':nth-child(2) > .element-list > .menu-list > #item-0')
    }
    getProfilePageMain(){
        return cy.get(':nth-child(6) > .element-list > .menu-list > #item-3')
    }

}export default SideBarOptions