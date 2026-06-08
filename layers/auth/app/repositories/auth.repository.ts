import type { SignupInput } from '#layers/auth/app/types/auth'

export const signup = (input: SignupInput) => {
  return $fetch('/api/auth/signup', {
    method: 'POST',
    body: input,
  })
}
