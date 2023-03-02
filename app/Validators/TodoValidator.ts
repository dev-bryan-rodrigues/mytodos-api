import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TodoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }),
    responsable: schema.string({ trim: true }),
    description: schema.string({ trim: true }),
    list_id: schema.number()
  })

  public messages: CustomMessages = {}
}
