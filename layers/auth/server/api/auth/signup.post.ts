import { signupBodySchema } from '#layers/auth/server/schemas/auth.schema'
import { signupUser } from '#layers/auth/server/services/auth.service'
import { setAuthCookie } from '#layers/auth/server/utils/auth-cookie'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, signupBodySchema.parse)
  const { user, token } = await signupUser(body)

  setAuthCookie(event, token)

  return user
})
