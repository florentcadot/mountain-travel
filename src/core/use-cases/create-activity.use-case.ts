import { ActivitiesEntityRepository } from '../../adapter/activities/activities.entity-repository'
import { Activity, ActivityProps } from '../entities/activity.js'

type CreateActivityProps = ActivityProps

export class CreateActivityUseCase {
  constructor (
    private readonly activitiesRepository: ActivitiesEntityRepository
  ) {}

  public async execute (props: CreateActivityProps) {
    return await this.activitiesRepository.create(new Activity(props))
  }
}
