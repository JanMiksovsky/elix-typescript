/// <reference path="../types.ts"/>

/**
 * @type {TestMixinType}
 */
const TestMixin =

  /**
   * @param {TestMixinBase} Base
   */
  function(Base) {
    return class Test extends Base {
      connectedCallback() {
        if (super.connectedCallback) { super.connectedCallback(); }
      }
    }
  };

export default TestMixin;
