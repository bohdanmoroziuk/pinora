import { getUserProfileByUsername } from '#layers/user/server/services/user.service'
import { getAuthUserId } from '#layers/auth/server/utils/auth-user'
import { getUserProfileByUsernameParamsSchema } from '#layers/user/server/schemas/follow.schema'

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, getUserProfileByUsernameParamsSchema.parse)
  const authUserId = getAuthUserId(event)
  const userProfile = await getUserProfileByUsername({ username: params.username, authUserId })

  invariant(userProfile, 404, 'User not found')

  return userProfile
})
