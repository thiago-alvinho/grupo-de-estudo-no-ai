import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'lesson_progresses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
      .increments('id')
      table
      .integer('user_id')
      .unsigned()
      .references('users.id')
      .onDelete('CASCADE')
      .notNullable()
      table
      .integer('lesson_id')
      .unsigned()
      .references('lessons.id')
      .onDelete('CASCADE')
      .notNullable()
      table
      .timestamp('completed_at')
      table
      .timestamp('created_at')
      table
      .timestamp('updated_at')
      table
      .unique(['user_id', 'lesson_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}