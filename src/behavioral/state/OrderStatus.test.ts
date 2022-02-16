import Order from "./Order"

test('should create an Order with pending status', () => {
  const order = new Order()
  expect(order.status.value).toBe('pending')
})

test('should change Order to confirmed status', () => {
  const order = new Order()
  order.confirm()
  expect(order.status.value).toBe('confirmed')
})

test('should not be able to confirm a cancelled Order', () => {
  const order = new Order()
  order.cancel()
  expect(() => order.confirm()).toThrow(new Error('Order is cancelled'))
})