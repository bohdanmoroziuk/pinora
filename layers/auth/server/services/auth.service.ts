import type { SignupInput } from '#layers/auth/server/types/auth'
import { hashPassword } from '#layers/core/server/services/password.service'
import { createUser, findUserByEmail } from '#layers/user/server/services/user.service'

export const signup = async (input: SignupInput) => {
  const { fullName, username, email, password } = input

  const existingUser = await findUserByEmail(email)

  invariant(!existingUser, 409, 'User already exists')

  const hashedPassword = await hashPassword(password)

  const user = await createUser({
    fullName,
    username,
    email,
    password: hashedPassword,
  })

  return user
}
