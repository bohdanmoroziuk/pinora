import type { User } from '#layers/user/shared/types/user'
import type { SignupInput, LoginInput } from '#layers/auth/app/types/auth'

export const signup = (input: SignupInput) => {
  return $fetch<User>('/api/auth/signup', {
    method: 'POST',
    body: input,
  })
}

export const login = (input: LoginInput) => {
  return $fetch<User>('/api/auth/login', {
    method: 'POST',
    body: input,
  })
}
