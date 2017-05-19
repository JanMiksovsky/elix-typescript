type Constructor<T> = new (...args: any[]) => T;

interface MaybeGreet {
  greet?(): void;
}

function GreetMixin<T extends Constructor<HTMLElement & MaybeGreet>>(Base: T) {
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
