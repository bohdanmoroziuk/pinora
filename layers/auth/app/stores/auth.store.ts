import type { User } from '#layers/user/shared/types/user'
import type { SignupInput, LoginInput } from '#layers/auth/app/types/auth'
import { signup, login } from '#layers/auth/app/repositories/auth.repository'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  const signupUser = async (input: SignupInput) => {
    user.value = await signup(input)
  }

  const loginUser = async (input: LoginInput) => {
    user.value = await login(input)
  }

  return {
    user,
    signupUser,
    loginUser,
  }
})
