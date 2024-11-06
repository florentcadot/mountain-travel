
export interface ActivityProps {
  title: string
  description: string
  specSheetUrl?: string
  imageUrl?: string
  startDate: Date
  endDate: Date
  country: string
  city?: string
  postcode?: string
  latitude?: number
  longitude?: number
}

export class Activity {
  constructor (private readonly props: ActivityProps) {}

  get title (): string {
    return this.props.title
  }

  set title (title: string) {
    this.props.title = title
  }

  get description (): string {
    return this.props.description
  }

  set description (description: string) {
    this.props.description = description
  }

  get specSheetUrl (): string | undefined {
    return this.props.specSheetUrl
  }

  set specSheetUrl (specSheetUrl: string) {
    this.props.specSheetUrl = specSheetUrl
  }

  get imageUrl (): string | undefined {
    return this.props.imageUrl
  }

  set imageUrl (imageUrl: string) {
    this.props.imageUrl = imageUrl
  }

  get startDate (): Date {
    return this.props.startDate
  }

  set startDate (startDate: Date) {
    this.props.startDate = startDate
  }

  get endDate (): Date {
    return this.props.endDate
  }

  set endDate (endDate: Date) {
    this.props.endDate = endDate
  }

  get city (): string | undefined {
    return this.props.city
  }

  set city (city: string) {
    this.props.city = city
  }

  get postcode (): string | undefined {
    return this.props.postcode
  }

  set postcode (postcode: string) {
    this.props.postcode = postcode
  }

  get country (): string {
    return this.props.country
  }

  set country (country: string) {
    this.props.country = country
  }

  get latitude (): number | undefined {
    return this.props.latitude
  }

  set latitude (latitude: number) {
    this.props.latitude = latitude
  }

  get longitude (): number | undefined {
    return this.props.longitude
  }

  set longitude (longitude: number) {
    this.props.longitude = longitude
  }
}
