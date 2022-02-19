export default interface BillHandler {
  setNext: (handler: BillHandler) => BillHandler
  handle: (bills: any[], amount: number) => void
}
