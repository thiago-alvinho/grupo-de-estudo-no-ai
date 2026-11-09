import { TrackSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Lesson from '#models/lesson'

export default class Track extends TrackSchema {
    @hasMany(() => Lesson)
    declare lessons: HasMany<typeof Lesson>
    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>
}