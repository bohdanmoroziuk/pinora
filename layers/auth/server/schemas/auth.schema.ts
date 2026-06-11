import { z } from 'zod'

export const signupBodySchema = z.object({
  fullName: z.string().trim().min(3),
  username: z.string().trim().min(3).toLowerCase(),
  email: z.email().trim().toLowerCase(),
  password: z.string().trim().min(8).max(16),
})

export const loginBodySchema = z.object({
  email: z.email().trim().toLowerCase(),
  password: z.string().trim().min(8).max(16),
})
