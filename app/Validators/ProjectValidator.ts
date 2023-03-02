import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProjectValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.unique({ table: 'projects', column: 'title' })])
  })

  public messages = {
    unique: 'O {{field}} deve ser único',
    required: 'Este campo é obrigatório'
  }
}
