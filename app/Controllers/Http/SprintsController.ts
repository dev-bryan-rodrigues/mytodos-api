import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sprint from 'App/Models/Sprint'
import SprintValidator from 'App/Validators/SprintValidator'

export default class SprintsController {
  public async index({ request }: HttpContextContract) {
    const projectId = request.header('project_id')
    const sprints = await Sprint.query().where('project_id', `${projectId}`)
    return sprints
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(SprintValidator)
    await Sprint.create(data)
  }

  public async show({ params }: HttpContextContract) {
    const sprint = await Sprint.findOrFail(params.id)
    return sprint
  }

  public async update({ request, params }: HttpContextContract) {
    const sprint = await Sprint.findOrFail(params.id)
    const data = await request.validate(SprintValidator)
    sprint.merge(data)
    await sprint.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const sprint = await Sprint.findOrFail(params.id)
    await sprint.delete()
  }
}
