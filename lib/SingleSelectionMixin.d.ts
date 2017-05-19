type ElementConstructor = new() => HTMLElement;

interface PossibleBaseMembers {
  selectedItem?: Element;
}

interface SingleSelection {
  selectedItem: Element;
}

type SingleSelectionConstructor = new(...args: any[]) => SingleSelection;

export default function SingleSelectionMixin<T extends ElementConstructor>(Base: T & PossibleBaseMembers): T & SingleSelectionConstructor;
