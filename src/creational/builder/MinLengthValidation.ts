import Validation from './Validation';

export class MinLengthValidation implements Validation {
  constructor(readonly field: string, private readonly minLength: number) {}

  validate(input: any): Error | null {
    return input[this.field]?.length < this.minLength ? new Error(`${this.field} is invalid`) : null
  }
}
