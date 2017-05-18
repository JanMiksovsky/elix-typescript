import symbols from './symbols.js';

/**
 * @param {{new():HTMLElement}} Base 
 */
function ShadowTemplateMixin(Base) {

  class ShadowTemplate extends Base {
    constructor() {
      super();
      console.log(`constructor`);
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
