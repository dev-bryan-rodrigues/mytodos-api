import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Lists extends BaseSchema {
  protected tableName = 'lists'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table
        .integer('sprint_id')
        .unsigned()
        .references('id')
        .inTable('sprints')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
