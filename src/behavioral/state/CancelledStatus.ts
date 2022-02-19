import Order from './Order'
import OrderStatus from './OrderStatus'

export default class CancelledStatus extends OrderStatus {
  value: string

  constructor (order: Order) {
    super(order)
    this.value = 'cancelled'
  }

  confirm (): void {
    throw new Error('Order is cancelled')
  }

  cancel (): void {
    throw new Error('Order is already cancelled')
  }
}
