import { validate } from '#layers/core/server/utils/validate'
import { signupSchema } from '#layers/auth/server/schemas/auth.schema'
import { signup } from '#layers/auth/server/services/auth.service'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const input = validate(signupSchema, body)
  const user = await signup(input)

  return user
})
