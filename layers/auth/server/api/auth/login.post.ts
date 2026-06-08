import { loginSchema } from '#layers/auth/server/schemas/auth.schema'
import { loginUser } from '#layers/auth/server/services/auth.service'
import { setAuthCookie } from '#layers/auth/server/utils/auth-cookie'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const input = validate(loginSchema, body)
  const { user, token } = await loginUser(input)

  setAuthCookie(event, token)

  return user
})
