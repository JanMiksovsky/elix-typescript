type ElementConstructor = new() => HTMLElement;

interface SingleSelection {
  selectedItem: Element;
}

type SingleSelectionConstructor = new(...args: any[]) => SingleSelection;

export default function SingleSelectionMixin<T extends ElementConstructor>(Base: T): T & SingleSelectionConstructor;
