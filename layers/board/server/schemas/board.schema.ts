import { z } from 'zod'
import { mongoIdSchema } from '#layers/core/server/schemas/common.schema'

export const getBoardsQuerySchema = z.object({
  userId: mongoIdSchema,
})
