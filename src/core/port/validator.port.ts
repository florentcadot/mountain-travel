
export interface Validator {
  validate: <T>(data: unknown, schema: any) => T
}
