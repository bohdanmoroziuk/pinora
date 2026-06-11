import type { UserProfile } from '#layers/user/shared/types/user'
import { userRepository } from '#layers/user/app/repositories/user.repository'

export const useUsersStore = defineStore('users', () => {
  const userProfile = ref<Nullable<UserProfile>>(null)

  const loadUserProfileByUsername = async (username: string) => {
    userProfile.value = await userRepository.getUserProfileByUsername(username)
  }

  const toggleUserFollow = async (username: string) => {
    const result = await userRepository.toggleUserFollow(username)

    if (!userProfile.value) {
      return result
    }

    userProfile.value.isFollowing = result.isFollowing

    if (result.isFollowing) {
      userProfile.value.followersCount += 1
    }
    else {
      userProfile.value.followersCount -= 1
    }

    return result
  }

  return {
    userProfile,
    loadUserProfileByUsername,
    toggleUserFollow,
  }
})
