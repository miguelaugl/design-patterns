import Atm from './Atm'
import AtmBillHandler from './AtmBillHandler'

test('should withdraw money with all bills', function () {
  const handler100 = new AtmBillHandler(100)
  handler100
    .setNext(new AtmBillHandler(50))
    .setNext(new AtmBillHandler(20))
    .setNext(new AtmBillHandler(10))
    .setNext(new AtmBillHandler(5))
    .setNext(new AtmBillHandler(2))
    .setNext(new AtmBillHandler(1))
  const atm = new Atm(handler100)
  const bills = atm.withdraw(978)
  expect(bills).toStrictEqual([
    { type: 100, quantity: 9 },
    { type: 50, quantity: 1 },
    { type: 20, quantity: 1 },
    { type: 10, quantity: 0 },
    { type: 5, quantity: 1 },
    { type: 2, quantity: 1 },
    { type: 1, quantity: 1 },
  ])
})

test('should withdraw money with only 1 dollar bills', function () {
  const handler1 = new AtmBillHandler(1)
  const atm = new Atm(handler1)
  const bills = atm.withdraw(978)
  expect(bills).toStrictEqual([
    { type: 1, quantity: 978 },
  ])
})

test('should withdraw money with only 10 and 5 dollar bills', function () {
  const handler5 = new AtmBillHandler(5)
  const handler10 = new AtmBillHandler(10)
  handler10.setNext(handler5)
  const atm = new Atm(handler10)
  const bills = atm.withdraw(500)
  expect(bills).toStrictEqual([
    { type: 10, quantity: 50 },
    { type: 5, quantity: 0 },
  ])
})
