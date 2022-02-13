import Beer from "./Beer"
import Invoice from "./Invoice"
import Water from "./Water"
import Whisky from "./Whisky"

it('should create an invoice and calculate tax', () => {
  const invoice = new Invoice()
  invoice.addItem(new Beer('Heineken', 20)) // 10% 2
  invoice.addItem(new Whisky('Jack Daniels', 100)) // 20% 20
  invoice.addItem(new Water('Crystal', 5)) // 0% 0
  const taxes = invoice.getTaxes()
  expect(taxes).toBe(22)
})