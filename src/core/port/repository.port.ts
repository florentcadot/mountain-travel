export interface Repository {
  insertOne: <T>(data: T) => Promise<void>
  find: <T>(props: Record<string, string>) => Promise<any[]>
}
