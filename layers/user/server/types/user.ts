export type CreateUserInput = {
  fullName: string
  username: string
  email: string
  password: string
}

export type GetUserProfileByUsernameInput = {
  username: string
  authUserId: string | null
}
