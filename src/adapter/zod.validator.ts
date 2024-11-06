import { Validator } from '../core/port/validator.port.js'
import { ZodSchema, ZodError } from 'zod'

export class ZodValidator implements Validator {
  public validate<T>(data: unknown, schema: ZodSchema<T>): T {
    try {
      return schema.parse(data)
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error(`Validation failed: ${error.errors.map(e => e.message).join(', ')}`)
      }
      throw error
    }
  }
}
