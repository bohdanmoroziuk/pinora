import type { AuthUser } from '#layers/auth/shared/types/auth'
import type { SignupInput, LoginInput } from '#layers/auth/app/types/auth'
import { signup, login, logout, getMe } from '#layers/auth/app/repositories/auth.repository'

export const useAuthStore = defineStore('auth', () => {
  const authUser = ref<Nullable<AuthUser>>(null)
  const isAuthReady = ref(false)

  const isAuthenticated = computed(() => !!authUser.value)

  const signupUser = async (input: SignupInput) => {
    authUser.value = await signup(input)
  }

  const loginUser = async (input: LoginInput) => {
    authUser.value = await login(input)
  }

  const logoutUser = async () => {
    await logout()

    authUser.value = null
  }

  const getAuthUser = async () => {
    try {
      authUser.value = await getMe()
    }
    catch {
      authUser.value = null
    }
    finally {
      isAuthReady.value = true
    }
  }

  return {
    authUser,
    isAuthReady,
    isAuthenticated,
    signupUser,
    loginUser,
    logoutUser,
    getAuthUser,
  }
})
