import { ActivitiesEntityRepository } from '../../adapter/activities/activities.entity-repository'

export class GetActivitiesUseCase {
  constructor (
    private readonly activitiesRepository: ActivitiesEntityRepository
  ) {}

  public async execute () {
    return await this.activitiesRepository.get()
  }
}
