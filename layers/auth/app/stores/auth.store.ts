import type { User } from '#layers/user/shared/types/user'
import type { SignupInput } from '#layers/auth/app/types/auth'
import { signup } from '#layers/auth/app/repositories/auth.repository'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  const signupUser = async (input: SignupInput) => {
    user.value = await signup(input)
  }

  return {
    user,
    signupUser,
  }
})
