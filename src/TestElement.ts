import SingleSelectionMixin from '../lib/SingleSelectionMixin.js';
import ShadowTemplateMixin from '../lib/ShadowTemplateMixin.js';
import symbols from '../lib/symbols.js';

import { foo, bar } from './foo.js';
import { add } from '../lib/bar.js';

class TestElement extends ShadowTemplateMixin(SingleSelectionMixin(HTMLElement)) {

  constructor() {
    super();
    // When a child is clicked, set the selectedItem.
    this.addEventListener('click', event => {
      if (event.target instanceof HTMLElement) {
        this.selectedItem = event.target;
        event.stopPropagation();
      }
      this[symbols.applySelection]
    });
  }

  [symbols.applySelection](item: Element, selected: boolean) {
    if (super[symbols.applySelection]) { super[symbols.applySelection](item, selected); }
    item.classList.toggle('selected', selected);
  }

  get [symbols.template]() {
    return `
      <style>
        :host {
          cursor: default;
          user-select: none;
        }

        ::slotted(*) {
          align-items: center;
          border: 1px solid lightgray;
          display: inline-flex;
          height: 50px;
          justify-content: center;
          padding: 0.25em;
          width: 50px;
        }

        ::slotted(.selected) {
          background-color: highlight;
          color: highlighttext;
        }
      </style>
      <slot></slot>
    `;
  }

}

customElements.define('test-element', TestElement);
