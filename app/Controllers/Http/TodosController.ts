import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TodoValidator from 'App/Validators/TodoValidator'
import Todo from 'App/Models/Todo'

export default class TodosController {
  public async store({ request }: HttpContextContract) {
    const todo = await request.validate(TodoValidator)
    await Todo.create(todo)
  }

  public async update({ request, params }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id)
    const data = await request.validate(TodoValidator)
    todo.merge(data)
    await todo.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id)
    await todo.delete()
  }
}
