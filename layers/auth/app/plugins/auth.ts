import { useAuthStore } from '#layers/auth/app/stores/auth.store'

export default defineNuxtPlugin(async () => {
  const pinia = usePinia()
  const authStore = useAuthStore(pinia)

  if (authStore.isAuthReady === false) {
    await authStore.getAuthUser()
  }
})
