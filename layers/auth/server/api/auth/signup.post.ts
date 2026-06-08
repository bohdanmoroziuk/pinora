import { validate } from '#layers/core/server/utils/validate'
import { signupSchema } from '#layers/auth/server/schemas/auth.schema'
import { signupUser } from '#layers/auth/server/services/auth.service'
import { setAuthCookie } from '#layers/auth/server/utils/auth-cookie'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const input = validate(signupSchema, body)
  const { user, token } = await signupUser(input)

  setAuthCookie(event, token)

  return user
})
