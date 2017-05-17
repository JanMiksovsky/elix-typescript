function GreetMixin(Base: typeof HTMLElement) {
  class Greet extends Base {
    greet() {
      console.log(`Hello, ${this.textContent}!`);
    }
  }
  return Greet;
}

export default GreetMixin;
