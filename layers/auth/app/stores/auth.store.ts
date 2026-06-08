import type { User } from '#layers/user/shared/types/user'
import type { SignupInput, LoginInput } from '#layers/auth/app/types/auth'
import { signup, login, logout } from '#layers/auth/app/repositories/auth.repository'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  const isLoggedIn = computed(() => {
    return user.value !== null
  })

  const signupUser = async (input: SignupInput) => {
    user.value = await signup(input)
  }

  const loginUser = async (input: LoginInput) => {
    user.value = await login(input)
  }

  const logoutUser = async () => {
    await logout()

    user.value = null
  }

  return {
    user,
    isLoggedIn,
    signupUser,
    loginUser,
    logoutUser,
  }
})
