import PaypalTransaction from './PaypalTransaction'
import PaypalTransactionAdapter from './PaypalTransactionAdapter'
import StripeTransaction from './StripeTransaction'
import StripeTransactionAdapter from './StripeTransactionAdapter'

it('should create a Stripe transaction', () => {
  const stripeTransaction = new StripeTransaction('ANH81283939', 1000, 2)
  expect(stripeTransaction.code).toBe('ANH81283939')
})

it('should create a Paypal transaction', () => {
  const paypalTransaction = new PaypalTransaction(1298213, 1000, 'S')
  expect(paypalTransaction.id).toBe(1298213)
})

it('should create a transaction from the Stripe', () => {
  const stripeTransaction = new StripeTransaction('ANH81283939', 1000, 2)
  const transaction = new StripeTransactionAdapter(stripeTransaction)
  expect(transaction.trackNumber).toBe('ANH81283939')
  expect(transaction.amount).toBe(1000)
  expect(transaction.status).toBe('paid')
})

it('should create a transaction from the Paypal', () => {
  const paypalTransaction = new PaypalTransaction(1298213, 1000, 'P')
  const transaction = new PaypalTransactionAdapter(paypalTransaction)
  expect(transaction.trackNumber).toBe('1298213')
  expect(transaction.amount).toBe(1000)
  expect(transaction.status).toBe('waiting_payment')
})
