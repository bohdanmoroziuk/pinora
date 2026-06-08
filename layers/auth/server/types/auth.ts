import type { z } from 'zod'
import type { signupSchema } from '#layers/auth/server/schemas/auth.schema'

export type SignupInput = z.infer<typeof signupSchema>
