import type { SignupInput, LoginInput } from '#layers/auth/server/types/auth'
import { hashPassword, comparePassword } from '#layers/core/server/services/password.service'
import { signToken, getTokenSecret } from '#layers/core/server/services/token.service'
import { createUser, findUserByEmail, findUserByEmailWithPassword } from '#layers/user/server/services/user.service'
import { mapUser } from '#layers/user/server/mappers/user.mapper'

export const signupUser = async (input: SignupInput) => {
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

  const tokenSecret = getTokenSecret()
  const token = signToken({ userId: user.id }, tokenSecret, { expiresIn: '7d' })

  return {
    token,
    user,
  }
}

export const loginUser = async (input: LoginInput) => {
  const existingUser = await findUserByEmailWithPassword(input.email)

  invariant(existingUser, 401, 'Invalid email or password')

  const isPasswordValid = await comparePassword(input.password, existingUser.password)

  invariant(isPasswordValid, 401, 'Invalid email or password')

  const tokenSecret = getTokenSecret()
  const token = signToken({ userId: existingUser.id }, tokenSecret, { expiresIn: '7d' })

  return {
    token,
    user: mapUser(existingUser),
  }
}
