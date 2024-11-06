import { CreateActivityUseCase } from '../../core/use-cases/create-activity.use-case.js'
import { FastifyRequest } from 'fastify'
import { Validator } from '../../core/port/validator.port.js'
import { CreateActivitySchema } from './activities.zod-schema.js'
import { z } from 'zod'
import { GetActivitiesUseCase } from '../../core/use-cases/get-activities.use-case.js'

export class ActivitiesController {
  constructor (
    private readonly validator: Validator,
    private readonly createActivityUseCase: CreateActivityUseCase,
    private readonly getActivitiesUseCase: GetActivitiesUseCase
  ) {}

  public async createActivity (request: FastifyRequest) {
    try {
      const { body } = request
      const dto = this.validator.validate<z.infer<typeof CreateActivitySchema>>(body, CreateActivitySchema)
      return await this.createActivityUseCase.execute(dto)
    } catch (e) {
      throw e
    }
  }

  public async getActivities (request: FastifyRequest) {
    try {
      return await this.getActivitiesUseCase.execute()
    } catch (e) {
      throw e
    }
  }
}
