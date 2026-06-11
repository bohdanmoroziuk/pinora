import { z } from 'zod'
import { usernameSchema } from '#layers/core/server/schemas/common.schema'

export const getUserProfileByUsernameParamsSchema = z.object({
  username: usernameSchema,
})
