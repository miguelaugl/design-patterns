import TaxItem from './TaxItem'

export default class Beer extends TaxItem {
  constructor (readonly description: string, readonly price: number) {
    super('Beer', description, price)
  }

  getTax () {
    return 10
  }
}
