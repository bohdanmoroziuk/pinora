import { loginSchema } from '#layers/auth/server/schemas/auth.schema'
import { login } from '#layers/auth/server/services/auth.service'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const input = validate(loginSchema, body)
  const user = login(input)

  return user
})
