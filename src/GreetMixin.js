function GreetMixin(Base) {
    class Greet extends Base {
        greet() {
            console.log(`Hello, ${this.textContent}!`);
        }
    }
    return Greet;
}
export default GreetMixin;
