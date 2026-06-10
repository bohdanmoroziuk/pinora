import { z } from 'zod'

export const toggleUserFollowParamsSchema = z.object({
  username: z.string().min(3),
})
