export type User = {
  id: string
  fullName: string
  username: string
  email: string
  avatar: string | null
  createdAt: string
  updatedAt: string
}

export type UserFollowStatus = {
  isFollowing: boolean
}

export type UserProfile = User & UserFollowStatus & {
  followersCount: number
  followingCount: number
}
