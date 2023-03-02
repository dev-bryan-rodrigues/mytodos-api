import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserValidator from 'App/Validators/UserValidator'
import User from 'App/Models/User'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const user = await request.validate(UserValidator)
    await User.create(user)
    return response.send('Usuário criado com sucesso')
  }

  public async update({ request, params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const data = await request.validate(UserValidator)
    user.merge(data)
    await user.save()
    return response.send('Usuário atualizado com sucesso')
  }

  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return response.send('Usuário deletado com sucesso')
  }
}
