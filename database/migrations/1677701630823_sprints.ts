import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sprints extends BaseSchema {
  protected tableName = 'sprints'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.dateTime('start_at')
      table.dateTime('finish_at')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
