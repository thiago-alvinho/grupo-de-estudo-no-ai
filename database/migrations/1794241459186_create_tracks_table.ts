import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tracks'

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
      .string('title')
      .notNullable()
      table
      .text('description')
      table
      .boolean('is_public')
      .notNullable()
      .defaultTo(false)
      table
      .timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}