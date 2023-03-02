import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Project from './Project'

export default class Sprint extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public projectId: number

  @belongsTo(() => Project)
  public project: BelongsTo<typeof Project>

  @column.dateTime()
  public startAt: DateTime

  @column.dateTime()
  public finishAt: DateTime

  @column.dateTime({
    autoCreate: true
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true
  })
  public updatedAt: DateTime
}
