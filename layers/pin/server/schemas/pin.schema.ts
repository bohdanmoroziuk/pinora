import { z } from 'zod'

export const getPinsQuerySchema = z.object({
  search: z.string().optional(),
  userId: z.string().optional(),
  boardId: z.string().optional(),
})

export const getPinDetailsByIdParamsSchema = z.object({
  id: z.string().min(1),
})
