import Item from './Item'
import TaxItem from './TaxItem'

export default class Invoice {
  items: Item[] = []

  addItem (item: Item) {
    this.items.push(item)
  }

  getTaxes () {
    return this.items.reduce((total, item) => {
      const tax = item instanceof TaxItem ? item.calculateTax() : 0
      total += tax
      return total
    }, 0)
  }
}
