import { z } from 'zod'

export const getUserProfileByUsernameParamsSchema = z.object({
  username: z.string().min(3),
})

export const toggleUserFollowParamsSchema = z.object({
  username: z.string().min(3),
})
