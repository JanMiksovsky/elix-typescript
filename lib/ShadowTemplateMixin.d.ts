type ElementConstructor = new() => HTMLElement;
// type Constructor<T> = new(...args: any[]) => T;

export default function ShadowTemplateMixin<T extends ElementConstructor>(Base: T): T;
