import type { z } from 'zod'
import type { signupSchema, loginSchema } from '#layers/auth/server/schemas/auth.schema'

export type SignupInput = z.infer<typeof signupSchema>

export type LoginInput = z.infer<typeof loginSchema>
