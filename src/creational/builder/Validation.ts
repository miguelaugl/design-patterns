export default interface Validation {
  validate: (input: object) => Error | null
}
