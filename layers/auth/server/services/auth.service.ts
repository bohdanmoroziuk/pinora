import type { SignupInput, LoginInput } from '#layers/auth/server/types/auth'
import { hashPassword, comparePassword } from '#layers/core/server/services/password.service'
import { signAuthToken, verifyAuthToken } from '#layers/auth/server/services/auth-token.service'
import { createUser, findUserByEmail, findUserByEmailWithPassword, findUserById } from '#layers/user/server/services/user.service'
import { mapUser } from '#layers/user/server/mappers/user.mapper'
import { mapAuthUser } from '#layers/auth/server/mappers/auth.mapper'

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

  const token = signAuthToken({ userId: user.id })

  return {
    token,
    user: mapUser(user),
  }
}

export const loginUser = async (input: LoginInput) => {
  const existingUser = await findUserByEmailWithPassword(input.email)

  invariant(existingUser, 401, 'Invalid email or password')

  const isPasswordValid = await comparePassword(input.password, existingUser.password)

  invariant(isPasswordValid, 401, 'Invalid email or password')

  const token = signAuthToken({ userId: existingUser.id })

  return {
    token,
    user: mapUser(existingUser),
  }
}

export const getAuthUser = async (token: string) => {
  const payload = verifyAuthToken(token)

  const user = await findUserById(payload.userId)

  invariant(user, 401, 'Unauthenticated')

  return mapAuthUser(user)
}
