import { getUserByUsername } from '#layers/user/app/repositories/user.repository'

export const useUsersStore = defineStore('users', () => {
  const user = ref<User | null>(null)

  const loadUserByUsername = async (username: string) => {
    user.value = await getUserByUsername(username)
  }

  return {
    user,
    loadUserByUsername,
  }
})
