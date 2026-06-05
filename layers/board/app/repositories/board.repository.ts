import type { GetUserBoardsParams } from '#layers/board/app/types/board'

export const getUserBoards = async (params: GetUserBoardsParams) => {
  return $fetch('/api/boards', {
    query: params,
  })
}
