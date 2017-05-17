import SingleSelectionMixin from '../lib/SingleSelectionMixin.js';
import ShadowTemplateMixin from '../lib/ShadowTemplateMixin.js';

class TestElement extends ShadowTemplateMixin(SingleSelectionMixin(HTMLElement)) {

  constructor() {
    super();
    // When a child is clicked, set the selectedItem.
    this.addEventListener('click', event => {
      this.selectedItem = event.target;
      event.stopPropagation();
    });
  }

  applySelection(item: HTMLElement, selected: boolean) {
    if (super.applySelection) { super.applySelection(item, selected); }
    item.classList.toggle('selected', selected);
  }

  get template() {
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
