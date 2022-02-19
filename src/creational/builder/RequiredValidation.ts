import Validation from './Validation'

export class RequiredValidation implements Validation {
  constructor (readonly field: string) {}

  validate (input: any): Error | null {
    return input[this.field as keyof object] ? null : new Error(`${this.field} field is required`)
  }
}
