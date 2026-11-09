import { LessonSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Track from '#models/track'
import LessonProgress from '#models/lesson_progress'

export default class Lesson extends LessonSchema {
    @hasMany(() => LessonProgress)
    declare lessonProgresses: HasMany<typeof LessonProgress>
    @belongsTo(() => Track)
    declare track: BelongsTo<typeof Track>
}