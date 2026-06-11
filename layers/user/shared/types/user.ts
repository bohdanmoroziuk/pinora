export type User = {
  id: string
  fullName: string
  username: string
  email: string
  avatar: Nullable<string>
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
