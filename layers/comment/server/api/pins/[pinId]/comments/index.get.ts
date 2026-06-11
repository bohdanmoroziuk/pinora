import { getComments } from '#layers/comment/server/services/comment.service'
import { getCommentsParamsSchema } from '#layers/comment/server/schemas/comment.schema'

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, getCommentsParamsSchema.parse)
  const comments = await getComments(params)

  return comments
})
