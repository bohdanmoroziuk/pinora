import { z } from 'zod'
import { usernameSchema, emailSchema, passwordSchema } from '#layers/core/server/schemas/common.schema'

export const signupBodySchema = z.object({
  fullName: z.string().trim().min(3),
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
})

export const loginBodySchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})
