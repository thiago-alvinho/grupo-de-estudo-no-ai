import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'lessons'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
      .increments('id')
      table
      .integer('track_id')
      .unsigned()
      .references('tracks.id')
      .onDelete('CASCADE')
      .notNullable()
      table
      .string('title')
      .notNullable()
      table
      .string('youtube_url')
      .notNullable()
      table
      .string('youtube_video_id')
      .notNullable()
      table
      .integer('position')
      .notNullable()
      table
      .timestamp('created_at')
      table
      .timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}