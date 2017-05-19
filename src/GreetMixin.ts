type Constructor<T> = new (...args: any[]) => T

function GreetMixin<T extends Constructor<HTMLElement>>(Base: T): T {
  class Greet extends Base {
    greet() {
      console.log(`Hello, ${this.textContent}!`);
    }
  }
  return Greet;
}

export default GreetMixin;
