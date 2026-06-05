import { getBoards } from '#layers/board/server/services/board.service'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const userId = query.userId as string | undefined

  invariant(userId, 400, 'UserId not provided')

  const boards = await getBoards({ userId })

  return boards
})
