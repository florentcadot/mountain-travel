import { Activity, ActivityProps } from '../../core/entities/activity.js'

export type CreateActivityRepositoryDto = ActivityProps

export class CreateActivityMapper {
  static toRepositoryDto (activity: Activity): CreateActivityRepositoryDto {
    return {
      title: activity.title,
      description: activity.description,
      specSheetUrl: activity.specSheetUrl,
      imageUrl: activity.imageUrl,
      startDate: activity.startDate,
      endDate: activity.endDate,
      city: activity.city,
      postcode: activity.postcode,
      country: activity.country,
      latitude: activity.latitude,
      longitude: activity.longitude
    }
  }
}
