import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async store({ request, auth }: HttpContextContract) {
    const { name, password } = request.all()
    const user = await User.query().where('name', name)
    const token = await auth.attempt(name, password, {
      expiresIn: '1 day'
    })

    return { token, user }
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
