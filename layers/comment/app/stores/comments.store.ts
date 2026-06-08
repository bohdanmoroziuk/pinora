import type { CommentDetails } from '#layers/comment/shared/types/comment'
import type { GetCommentsParams } from '#layers/comment/app/types/comment'
import { getComments } from '#layers/comment/app/repositories/comment.repository'

export const useCommentsStore = defineStore('comments', () => {
  const comments = ref<CommentDetails[]>([])

  const loadComments = async (params: GetCommentsParams) => {
    comments.value = await getComments(params)
  }

  return {
    comments,
    loadComments,
  }
})
