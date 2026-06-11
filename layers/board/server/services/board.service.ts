import type { GetBoardsInput } from '#layers/board/server/types/board'
import { boardRepository } from '#layers/board/server/repositories/board.repository'
import { mapBoard } from '#layers/board/server/mappers/board.mapper'

export const getBoards = async (input: GetBoardsInput) => {
  const boards = await boardRepository.getMany(input)

  return boards.map(mapBoard)
}
