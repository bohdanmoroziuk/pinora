import type { GetUserBoardsParams } from '#layers/board/app/types/board'

export const getUserBoards = async (params: GetUserBoardsParams) => {
  return $fetch<Board[]>('/api/boards', {
    query: params,
  })
}
