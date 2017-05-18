import symbols from './symbols.js';

/**
 * @param {{new():HTMLElement}} Base
 * @return {{new():HTMLElement}}
 */
function ShadowTemplateMixin(Base) {

  class ShadowTemplate extends Base {
    constructor() {
      super();
      const template = this[symbols.template];
      if (template) {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
      }
    }
  }
  
  return ShadowTemplate;
}

export default ShadowTemplateMixin;
