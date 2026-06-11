import { createCommentParamsSchema, createCommentBodySchema } from '#layers/comment/server/schemas/comment.schema'
import { requireAuthUserId } from '#layers/auth/server/utils/auth-user'
import { createComment } from '#layers/comment/server/services/comment.service'

export default defineEventHandler(async (event) => {
  const userId = requireAuthUserId(event)
  const params = await getValidatedRouterParams(event, createCommentParamsSchema.parse)
  const body = await readValidatedBody(event, createCommentBodySchema.parse)
  const comment = await createComment({
    pin: params.pinId,
    user: userId,
    description: body.description,
  })

  return comment
})
