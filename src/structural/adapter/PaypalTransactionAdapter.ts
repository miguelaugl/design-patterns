import PaypalTransaction from './PaypalTransaction'
import Transaction from './Transaction'

export default class PaypalTransactionAdapter implements Transaction {
  trackNumber: string
  amount: number
  status: string

  constructor (paypalTransaction: PaypalTransaction) {
    this.trackNumber = String(paypalTransaction.id)
    this.amount = paypalTransaction.amount
    this.status = this.convertStatus(paypalTransaction.status)
  }

  convertStatus (status: string): string {
    switch (status) {
      case 'P':
        return 'waiting_payment'
      case 'S':
        return 'paid'
      case 'F':
        return 'refunded'
      default:
        return ''
    }
  }
}
