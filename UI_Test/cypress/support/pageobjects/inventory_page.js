/**
  * UI Test - Inventory Page Object Model to ensure that test is maintainable. 
  */
 
class InventoryPage {
    //locate product element and select sort in Ascending order option.
    sortByNameAsc() {
      cy.get('.product_sort_container').select('az')
    }
  
    //locate product element and select sort in Descending order option.
    sortByNameDesc() {
      cy.get('.product_sort_container').select('za')
    }
    
    //Validate that items are sorted as expected using Explicit assertions - Expect BDD style
    verifyItemsSortedByNameAsc() {
      cy.get('.inventory_item_name')
        .should('have.length.gt', 1)
        .then($items => {
          const itemNames = $items.map((i, el) => Cypress.$(el).text())
          const sortedItemNames = itemNames.toArray().sort()
  
          expect(itemNames.toArray()).to.deep.equal(sortedItemNames)
        })
    
    }
    
    //Validate that items are sorted as expected using Explicit assertions - Expect BDD style
    verifyItemsSortedByNameDesc() {
      cy.get('[data-test=product_sort_container]')
      .select('za')
    
    cy.get('.inventory_item_name')
      .then($items => {
        const itemNames = $items.map((i, el) => Cypress.$(el).text())
        const sortedItemNames = itemNames.toArray().sort().reverse()

        expect(itemNames.toArray()).to.deep.equal(sortedItemNames)
      })
    }
  }

export default InventoryPage;