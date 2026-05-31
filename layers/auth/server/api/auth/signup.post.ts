import { signup } from '#layers/auth/server/services/auth.service'

type SignupRequestBody = {
  fullName: string
  username: string
  email: string
  password: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<SignupRequestBody>(event)
  const user = await signup(body)

  return user
})
