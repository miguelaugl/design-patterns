import Item from "./Item";

export default abstract class TaxItem extends Item {
  constructor (readonly category: string, readonly description: string, readonly price: number) {
    super(category, description, price)
  }

  // template method
  calculateTax () {
    return this.price * this.getTax() / 100
  }

  abstract getTax(): number
}