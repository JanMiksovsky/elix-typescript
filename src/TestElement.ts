import GreetMixin from './GreetMixin';
// import SingleSelectionMixin from '../node_modules/elix/mixins/SingleSelectionMixin.js';
// import ShadowTemplateMixin from '../node_modules/elix/mixins/ShadowTemplateMixin.js';
import symbols from '../node_modules/elix/mixins/symbols.js';

import { string2number } from './foo.js';
import { string2boolean } from './bar.js';
import TestMixin from './TestMixin.js';

const n1: number = string2number('1');
const n2: boolean = string2boolean('false');

class Foo extends TestMixin(GreetMixin(HTMLElement)) {
  constructor() {
    super();
  }
}
const foo = new Foo();
foo.greet();


/**
 * A sample element class.
 */
// class TestElement extends ShadowTemplateMixin(SingleSelectionMixin(HTMLElement)) {

//   constructor() {
//     super();
//     // When a child is clicked, set the selectedItem.
//     this.addEventListener('click', event => {
//       if (event.target instanceof Element) {
//         this.selectedItem = event.target;
//         event.stopPropagation();
//       }
//     });
//   }

//   attributeChangedCallback(attributeName, oldValue, newValue) {
//     if (attributeName === 'selected-index') {
//       this.selectedIndex = newValue;
//     }
//   }

//   // Map item selection to a `selected` CSS class.
//   [symbols.itemSelected](item, selected) {
//     if (super[symbols.itemSelected]) { super[symbols.itemSelected](item, selected); }
//     item.classList.toggle('selected', selected);
//   }

//   // Simplistic implementation of items property — doesn't handle redistribution.
//   get items() {
//     return this.children;
//   }

//   static get observedAttributes() {
//     return ['selected-index'];
//   }

//   get [symbols.template]() {
//     return `
//       <style>
//         :host {
//           cursor: default;
//           user-select: none;
//         }

//         ::slotted(*) {
//           align-items: center;
//           border: 1px solid lightgray;
//           display: inline-flex;
//           height: 50px;
//           justify-content: center;
//           padding: 0.25em;
//           width: 50px;
//         }

//         ::slotted(.selected) {
//           background-color: highlight;
//           color: highlighttext;
//         }
//       </style>
//       <slot></slot>
//     `;
//   }

// }

// customElements.define('test-element', TestElement);
