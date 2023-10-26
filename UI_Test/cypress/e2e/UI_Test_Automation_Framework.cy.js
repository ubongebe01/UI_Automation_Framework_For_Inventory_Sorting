import InventoryPage  from "../support/pageobjects/inventory_page"
import Login_PO from "../support/pageobjects/login_page"

//page objects initialisation
const login = new Login_PO();
const page = new InventoryPage();

//Test Suite
describe('Inventory Sorting', () => {
    /*Visits URL and fetch username and password 
    from credentials Json file in fixture folder to their respective input 
    fields. repeats this for all the 'it' blocks*/
    beforeEach(() => {
        login.LaunchURL();
        login.Login(data.login.validdataset.username,data.login.validdataset.password);
    });

    /*Data Driven Testing - Access and initialise credentials Json file 
    in fixture folder before each 'it' block*/
    before(function () {
        cy.fixture('credentials').then( (data) => {
            globalThis.data = data;
        });
    });
  
    //Verify that the items are sorted by Name ( A -> Z )
    it('should sort items by name (A -> Z)', () => {
      page.sortByNameAsc()
      page.verifyItemsSortedByNameAsc()
    });
  
    //Verify that the items are sorted by Name ( z -> A )
    it('should sort items by name (Z -> A)', () => {
      page.sortByNameDesc()
      page.verifyItemsSortedByNameDesc()
    })
  })