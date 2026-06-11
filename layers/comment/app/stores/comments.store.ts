import type { CommentDetails } from '#layers/comment/shared/types/comment'
import type { CreateCommentInput } from '#layers/comment/app/types/comment'
import { commentRepository } from '#layers/comment/app/repositories/comment.repository'

export const useCommentsStore = defineStore('comments', () => {
  const comments = ref<CommentDetails[]>([])

  const loadComments = async (pinId: string) => {
    comments.value = await commentRepository.getComments(pinId)
  }

  const createComment = async (pinId: string, data: CreateCommentInput) => {
    await commentRepository.createComment(pinId, data)
  }

  return {
    comments,
    loadComments,
    createComment,
  }
})
