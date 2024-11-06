import { Repository } from '../../core/port/repository.port'
import { Activity } from '../../core/entities/activity.js'
import { CreateActivityMapper, CreateActivityRepositoryDto } from './activities.mapper.js'
import { EntityRepository } from '../../core/port/entity-repository.js'

export class ActivitiesEntityRepository implements EntityRepository<Activity> {
  constructor (
    private readonly repository: Repository
  ) {}

  public async create (activity: Activity) {
    return await this.repository.insertOne<CreateActivityRepositoryDto>(CreateActivityMapper.toRepositoryDto(activity))
  }

  public async get () {
    return await this.repository.find({})
  }
}
