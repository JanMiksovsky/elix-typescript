type ElementConstructor = new(...args: any[]) => HTMLElement;

export default function ShadowTemplateMixin<T extends ElementConstructor>(Base: T): T;
