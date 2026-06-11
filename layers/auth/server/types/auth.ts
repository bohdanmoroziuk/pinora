import type { z } from 'zod'
import type { signupBodySchema, loginBodySchema } from '#layers/auth/server/schemas/auth.schema'

export type SignupInput = z.infer<typeof signupBodySchema>

export type LoginInput = z.infer<typeof loginBodySchema>
