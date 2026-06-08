import { getPins } from '#layers/pin/server/services/pin.service'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const search = query.search as string | undefined
  const userId = query.userId as string | undefined
  const boardId = query.boardId as string | undefined

  const pins = await getPins({
    search,
    userId,
    boardId,
  })

  return pins
})
