import Fastify from 'fastify'
import { ActivitiesController } from './adapter/activities/activities.controller.js'
import { CreateActivityUseCase } from './core/use-cases/create-activity.use-case.js'
import { ActivitiesEntityRepository } from './adapter/activities/activities.entity-repository.js'
import { MongoRepository } from './adapter/mongo.repository.js'
import { ZodValidator } from './adapter/zod.validator.js'
import { GetActivitiesUseCase } from './core/use-cases/get-activities.use-case.js'

const { ENV, PORT } = process.env

const isDevelopment = (env?: string) => env === 'development'

const app = Fastify({
  logger: isDevelopment(ENV)
})

const activitiesRepository = new ActivitiesEntityRepository(
  new MongoRepository('activities')
)

const activitiesController = new ActivitiesController(
  new ZodValidator(),
  new CreateActivityUseCase(activitiesRepository),
  new GetActivitiesUseCase(activitiesRepository)
)

app.post('/activities', activitiesController.createActivity.bind(activitiesController))
app.get('/activities', activitiesController.getActivities.bind(activitiesController))

async function main () {
  try {
    const port = parseInt(PORT ?? '')
    await app.listen({ port: isNaN(port) ? 3000 : port })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

main()
