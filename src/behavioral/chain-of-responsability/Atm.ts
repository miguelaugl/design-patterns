import BillHandler from './BillHandler'

export default class Atm {
  constructor (readonly billHandler: BillHandler) {}

  withdraw (amount: number) {
    const bills: any[] = []
    this.billHandler.handle(bills, amount)
    return bills
  }
}
