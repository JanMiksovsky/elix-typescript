// import symbols from './symbols.js';

type ElementConstructor = new() => HTMLElement;

interface SingleSelection {
  // [symbols.applySelection](item: HTMLElement, selected: boolean): void;
  selectedItem: HTMLElement;
}

type SingleSelectionConstructor = new(...args: any[]) => SingleSelection;

export default function SingleSelectionMixin<T extends ElementConstructor>(Base: T): T & SingleSelectionConstructor;
