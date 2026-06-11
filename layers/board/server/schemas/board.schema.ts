import { z } from 'zod'

export const getBoardsQuerySchema = z.object({
  userId: z.string().min(1),
})
