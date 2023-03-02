import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SprintValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }),
    project_id: schema.number(),
    start_at: schema.string(),
    finish_at: schema.string()
  })

  public messages = {
    required: 'Este campo é obrigatório'
  }
}
