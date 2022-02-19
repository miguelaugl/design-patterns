import { MinLengthValidation } from './MinLengthValidation'
import { RequiredValidation } from './RequiredValidation'
import ValidationBuilder from './ValidationBuilder'

test('should return a list of validations', () => {
  const validations = ValidationBuilder.field('name').required().min(5).build()
  expect(validations).toEqual([
    new RequiredValidation('name'),
    new MinLengthValidation('name', 5),
  ])
})
