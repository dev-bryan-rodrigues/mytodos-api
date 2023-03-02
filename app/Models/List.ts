import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Sprint from './Sprint'
import Todo from './Todo'

export default class List extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public sprintId: number

  @belongsTo(() => Sprint)
  public sprint: BelongsTo<typeof Sprint>

  @hasMany(() => Todo)
  public todos: HasMany<typeof Todo>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
