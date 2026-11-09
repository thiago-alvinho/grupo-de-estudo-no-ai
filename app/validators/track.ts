import vine from '@vinejs/vine'

export const trackValidator = vine.create({
    title: vine.string().trim().minLength(3).maxLength(255),
    description: vine.string().trim().nullable(),
    isPublic: vine.boolean()
})