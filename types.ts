type Constructor<T> = new(...args: any[]) => T;

type Parser<T> = (s: string) => T;
type StringToNumber = Parser<number>;
type StringToBoolean = Parser<boolean>;

type ElementWithExpectations<Expectations> = Constructor<HTMLElement & Expectations>;

type Mixin<BaseExpectations, MixinMembers> =
  <T extends Constructor<HTMLElement & BaseExpectations>>(Base: T) => 
    Constructor<T & MixinMembers>;

interface TestMixinExpectations {
  connectedCallback?(): void
}
type TestMixinBase = Constructor<HTMLElement & TestMixinExpectations>;
type TestMixinType = Mixin<TestMixinExpectations, {
  connectedCallback(): void
}>;
