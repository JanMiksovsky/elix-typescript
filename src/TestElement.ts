// import GreetMixin from './GreetMixin.js';
import ShadowTemplateMixin from '../lib/ShadowTemplateMixin.js';

class TestElement extends ShadowTemplateMixin(HTMLElement) {

  constructor() {
    super();
    console.log(this.textContent);
  }

  get template() {
    return `
      Hello, <slot></slot>!
    `;
  }

}

customElements.define('test-element', TestElement);
