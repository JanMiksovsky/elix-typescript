import symbols from './symbols.js';

// Simplistic mixin for single selection.
// This can remember which of the component's children is selected.
// This also maps component selection semantics (which item is selected)
// to item selection semantics (is an individual item selected or not).
const selectedItemKey = Symbol('selectedItem');

/**
 * @param {{new(): HTMLElement & {selectedItem?: Element}}} Base
 */
function SingleSelectionMixin(Base) {
  
  class SingleSelection extends Base {
  
    /**
     * Turn the selection state of an individual item on or off.
     * The exact semantics of that can be defined elsewhere.
     * Note: To simplify inspection of this sample in the debugger, this
     * method has a string name. In practice, this internal method would
     * be referenced via a Symbol key instead to avoid exposing it in the
     * component's public API.
     *
     * @param {Element} item
     * @param {boolean} selected
     */
    [symbols.applySelection](item, selected) {
      if (super[symbols.applySelection]) { super[symbols.applySelection](item, selected); }
      // By default, nothing happens when something is selected.
    }
    
    /**
     * The item (child) which is currently selected.
     * @type {Element}
     */
    get selectedItem() {
      return this[selectedItemKey];
    }
    /**
     * @param {Element} item
     */
    set selectedItem(item) {
      
      // Remember which item has now become selected.
      const previousSelectedItem = this[selectedItemKey];
      this[selectedItemKey] = item;
      
      if ('selectedItem' in Base.prototype) { super.selectedItem = item; }
      
      if (previousSelectedItem !== item) {
        // The selected item changed.
        if (previousSelectedItem) {
          // Remove selection from previous item.
          this[symbols.applySelection](previousSelectedItem, false);
        }
        // Apply selection to new item.
        this[symbols.applySelection](item, true);
      }
    }
  }

  return SingleSelection;
  
}

export default SingleSelectionMixin;
