import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import List from 'App/Models/List'
import ListValidator from 'App/Validators/ListValidator'

export default class ListsController {
  public async index({ request }: HttpContextContract) {
    const sprintId = request.header('sprint_id')
    const lists = await List.query().where('sprint_id', `${sprintId}`).preload('todos')
    return lists
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(ListValidator)
    await List.create(data)
  }

  public async show({ params }: HttpContextContract) {
    const list = await List.findOrFail(params.id)
    return list
  }

  public async update({ request, params }: HttpContextContract) {
    const list = await List.findOrFail(params.id)
    const data = await request.validate(ListValidator)
    list.merge(data)
    await list.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const list = await List.findOrFail(params.id)
    await list.delete()
  }
}
