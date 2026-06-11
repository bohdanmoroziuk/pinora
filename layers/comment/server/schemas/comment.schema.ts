import { z } from 'zod'
import { mongoIdSchema } from '#layers/core/server/schemas/common.schema'

export const getCommentsParamsSchema = z.object({
  pinId: mongoIdSchema,
})

export const createCommentParamsSchema = z.object({
  pinId: mongoIdSchema,
})

export const createCommentBodySchema = z.object({
  description: z.string().min(1).max(255),
})
