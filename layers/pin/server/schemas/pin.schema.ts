import { z } from 'zod'
import { mongoIdSchema } from '#layers/core/server/schemas/common.schema'

export const getPinsQuerySchema = z.object({
  search: z.string().optional(),
  userId: z.string().optional(),
  boardId: z.string().optional(),
})

export const getPinDetailsByIdParamsSchema = z.object({
  id: mongoIdSchema,
})
