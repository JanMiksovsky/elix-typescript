// import symbols from './symbols.js';

type ElementConstructor = new(...args: any[]) => HTMLElement;

interface SingleSelection {
  // [symbols.applySelection](item: HTMLElement, selected: boolean): void;
  selectedItem: Object;
}

type SingleSelectionConstructor = new(...args: any[]) => SingleSelection;

export default function SingleSelectionMixin<T extends ElementConstructor>(Base: T): T & SingleSelectionConstructor;
