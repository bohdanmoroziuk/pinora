import { loginBodySchema } from '#layers/auth/server/schemas/auth.schema'
import { loginUser } from '#layers/auth/server/services/auth.service'
import { setAuthCookie } from '#layers/auth/server/utils/auth-cookie'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, loginBodySchema.parse)
  const { user, token } = await loginUser(body)

  setAuthCookie(event, token)

  return user
})
