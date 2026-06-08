export const getUserByUsername = (username: string) => {
  return $fetch<User>(`/api/users/${username}`)
}
