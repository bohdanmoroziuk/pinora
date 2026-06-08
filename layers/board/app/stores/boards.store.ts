import type { Board } from '#layers/board/shared/types/board'
import { getUserBoards } from '#layers/board/app/repositories/board.repository'

export const useBoardsStore = defineStore('boards', () => {
  const userBoards = ref<Board[]>([])

  const loadUserBoards = async (userId: string) => {
    userBoards.value = await getUserBoards({ userId })
  }

  return {
    userBoards,
    loadUserBoards,
  }
})
