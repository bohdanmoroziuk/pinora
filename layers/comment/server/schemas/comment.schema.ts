import { z } from 'zod'

export const getCommentsParamsSchema = z.object({
  pinId: z.string().min(1),
})

export const createCommentParamsSchema = z.object({
  pinId: z.string().min(1),
})

export const createCommentBodySchema = z.object({
  description: z.string().min(1).max(255),
})
