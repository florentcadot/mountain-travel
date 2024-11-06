import { MongoClient } from 'mongodb'
import { Repository } from '../core/port/repository.port.js'

export class MongoRepository implements Repository {
  private readonly client: MongoClient
  private readonly dbName: string

  constructor (private readonly collectionName: string) {
    const { DB_URI, DB_NAME } = process.env

    if (!DB_URI) {
      throw new Error('Missing DB_URI env variable')
    }

    if (!DB_NAME) {
      throw new Error('Missing DB_NAME env variable')
    }

    this.client = new MongoClient(DB_URI)
    this.dbName = DB_NAME
  }

  private getCollection (collectionName: string) {
    return this.client.db(this.dbName).collection(collectionName)
  }

  public async insertOne <T>(data: T) {
    await this.getCollection(this.collectionName).insertOne(Object.assign({}, data))
  }

  public async find (filter: Record<string, any>) {
    return await this.getCollection(this.collectionName).find(filter).toArray()
  }
}
