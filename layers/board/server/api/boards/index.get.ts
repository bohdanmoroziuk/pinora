import { getBoards } from '#layers/board/server/services/board.service'
import { getBoardsQuerySchema } from '#layers/board/server/schemas/board.schema'

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, getBoardsQuerySchema.parse)
  const boards = await getBoards(query)

  return boards
})
