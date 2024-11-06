export interface EntityRepository<T> {
  create: (entity: T) => Promise<void>
  get: () => Promise<any[]>
}
