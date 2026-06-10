import { getUserProfileByUsername } from '#layers/user/server/services/user.service'
import { getAuthUserId } from '#layers/auth/server/utils/auth-user'

export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, 'username')

  invariant(username != undefined, 400, 'Username not provided')

  const authUserId = getAuthUserId(event)

  const userProfile = await getUserProfileByUsername({ username, authUserId })

  invariant(userProfile, 404, 'User not found')

  return userProfile
})
