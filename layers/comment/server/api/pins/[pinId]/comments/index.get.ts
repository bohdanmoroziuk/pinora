import { getComments } from '#layers/comment/server/services/comment.service'

export default defineEventHandler(async (event) => {
  const pinId = getRouterParam(event, 'pinId')

  invariant(pinId, 400, 'Pin id not provided')

  const comments = await getComments({ pinId })

  return comments
})
