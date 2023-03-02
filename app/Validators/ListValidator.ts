import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ListValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.unique({ table: 'lists', column: 'title' })]),
    sprint_id: schema.number()
  })

  public messages = {
    unique: 'O {{field}} precisa ser único',
    required: 'Este campo é obrigatório'
  }
}
