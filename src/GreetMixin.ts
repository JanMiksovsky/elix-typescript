/// <reference path="../types.ts"/>

/**
 * A sample mixin.
 */
function GreetMixin<T extends ElementWithExpectations<{greet?(): void }>>(Base: T) {
  class Greet extends Base {
    greet() {
      if (super.greet) { super.greet(); }
      console.log(`Hello, ${this.textContent}!`);
    }
  }
  return Greet;
}

export default GreetMixin;

// class Test extends GreetMixin(HTMLElement) {}
// const test = new Test();
// test.greet();
