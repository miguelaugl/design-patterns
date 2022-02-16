import { MinLengthValidation } from "./MinLengthValidation";
import { RequiredValidation } from "./RequiredValidation";
import Validation from "./Validation";

export default class ValidationBuilder {
  private constructor (private readonly fieldName: string, private readonly validations: Validation[]) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, []);
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredValidation(this.fieldName));
    return this;
  }
  
  min(length: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, length));
    return this;
  }

  build(): Validation[] {
    return this.validations;
  }
}