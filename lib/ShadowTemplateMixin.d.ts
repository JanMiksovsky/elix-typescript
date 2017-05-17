type Constructor<T> = new(...args: any[]) => T;

export default function ShadowTemplateMixin<T extends Constructor<HTMLElement>>(Base: T): T;
