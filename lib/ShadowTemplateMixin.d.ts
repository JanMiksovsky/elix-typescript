type ElementConstructor = new() => HTMLElement;

export default function SingleSelectionMixin<T extends ElementConstructor>(Base: T): T;
