import GreetMixin from './GreetMixin.js';
class TestElement extends GreetMixin(HTMLElement) {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
      Hello, <slot></slot>!
    `;
        this.addEventListener('click', () => {
            this.greet();
        });
    }
}
customElements.define('test-element', TestElement);
