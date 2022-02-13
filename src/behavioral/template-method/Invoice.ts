import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Invoice {
  items: Item[] = []

  constructor () {}

  addItem (item: Item) {
    this.items.push(item)
  }

  getTaxes () {
    return this.items.reduce((total, item) => {
      const tax = item instanceof TaxItem ? item.calculateTax() : 0
      return total += tax
    }, 0)
  }
}