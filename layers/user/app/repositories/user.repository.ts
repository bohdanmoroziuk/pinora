import type { UserProfile, UserFollowStatus } from '#layers/user/shared/types/user'

export const userRepository = {
  getUserProfileByUsername: (username: string) => {
    return $fetch<UserProfile>(`/api/users/${username}`)
  },

  toggleUserFollow: (username: string) => {
    return $fetch<UserFollowStatus>(`/api/users/${username}/follow`, {
      method: 'POST',
    })
  },
}
