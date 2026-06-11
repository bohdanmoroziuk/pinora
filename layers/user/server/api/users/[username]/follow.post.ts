import { toggleUserFollowParamsSchema } from '#layers/user/server/schemas/follow.schema'
import { toggleUserFollow } from '#layers/user/server/services/follow.service'

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, toggleUserFollowParamsSchema.parse)
  const followerId = requireAuthUserId(event)

  return toggleUserFollow({
    username: params.username,
    follower: followerId,
  })
})
