import vine from '@vinejs/vine'

export const lessonValidator = vine.create({
    title: vine.string().trim().minLength(3).maxLength(255),
    youtubeUrl: vine.string().trim().url().regex(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/ )
})