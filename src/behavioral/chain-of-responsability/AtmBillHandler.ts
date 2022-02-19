import BillHandler from "./BillHandler";

export default class AtmBillHandler implements BillHandler {
  private nextHandler: BillHandler | undefined;

  constructor (readonly type: number) {}
  
  public setNext(handler: BillHandler): BillHandler {
    this.nextHandler = handler;
    return handler;
  }
  
  public handle(bills: any[], amount: number): void {
    const quantity = Math.floor(amount / this.type);
		bills.push({ type: this.type, quantity });
		const remaining = amount % this.type;
    if (this.nextHandler) {
      return this.nextHandler.handle(bills, remaining);
    } 
  }
}