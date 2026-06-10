import type { AuthUser } from '#layers/auth/shared/types/auth'
import type { SignupInput, LoginInput } from '#layers/auth/app/types/auth'

export const signup = (input: SignupInput) => {
  return $fetch<AuthUser>('/api/auth/signup', {
    method: 'POST',
    body: input,
  })
}

export const login = (input: LoginInput) => {
  return $fetch<AuthUser>('/api/auth/login', {
    method: 'POST',
    body: input,
  })
}

export const logout = () => {
  return $fetch('/api/auth/logout', {
    method: 'POST',
  })
}

export const getMe = () => {
  const headers = import.meta.server
    ? useRequestHeaders(['cookie'])
    : undefined

  return $fetch<AuthUser>('/api/auth/me', {
    headers,
  })
}
