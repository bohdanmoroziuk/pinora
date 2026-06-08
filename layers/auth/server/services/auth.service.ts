import type { SignupInput, LoginInput } from '#layers/auth/server/types/auth'
import { hashPassword, comparePassword } from '#layers/core/server/services/password.service'
import { createUser, findUserByEmail, findUserByEmailWithPassword } from '#layers/user/server/services/user.service'
import { mapUser } from '#layers/user/server/mappers/user.mapper'

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

export const login = async (input: LoginInput) => {
  const existingUser = await findUserByEmailWithPassword(input.email)

  invariant(existingUser, 401, 'Invalid email or password')

  const isPasswordValid = comparePassword(input.password, existingUser.password)

  invariant(isPasswordValid, 401, 'Invalid email or password')

  return mapUser(existingUser)
}
