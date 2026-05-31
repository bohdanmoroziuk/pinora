import { hashPassword } from '#layers/core/server/services/password.service'
import { createUser, findUserByEmail } from '#layers/user/server/services/user.service'

type SignupInput = {
  fullName: string
  username: string
  email: string
  password: string
}

export const signup = async (input: SignupInput) => {
  const { fullName, username, email, password } = input

  const existingUser = await findUserByEmail(email)

  if (existingUser) {
    throw createError({
      statusCode: 409,
      statusMessage: 'User already exists',
    })
  }

  const hashedPassword = await hashPassword(password)

  const user = await createUser({
    fullName,
    username,
    email,
    password: hashedPassword,
  })

  return user
}
