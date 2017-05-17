function ShadowTemplateMixin(Base) {

  class ShadowTemplate extends Base {
    constructor() {
      super();
      console.log(`constructor`);
      const template = this.template;
      if (template) {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
      }
    }
  }
  
  return ShadowTemplate;
}

export default ShadowTemplateMixin;