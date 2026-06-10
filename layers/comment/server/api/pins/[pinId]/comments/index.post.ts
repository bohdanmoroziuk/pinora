import { createCommentParamsSchema, createCommentBodySchema } from '#layers/comment/server/schemas/comment.schema'
import { requireAuthUserId } from '#layers/auth/server/utils/auth-user'
import { createComment } from '#layers/comment/server/services/comment.service'

export default defineEventHandler(async (event) => {
  const userId = requireAuthUserId(event)
  const params = validate(createCommentParamsSchema, { pinId: getRouterParam(event, 'pinId') })
  const body = validate(createCommentBodySchema, await readBody(event))
  const comment = await createComment({
    pin: params.pinId,
    user: userId,
    description: body.description,
  })

  return comment
})
