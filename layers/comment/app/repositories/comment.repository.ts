import type { CommentDetails } from '#layers/comment/shared/types/comment'
import type { CreateCommentInput } from '#layers/comment/app/types/comment'

export const commentRepository = {
  getComments: (pinId: string) => {
    return $fetch<CommentDetails[]>(`/api/pins/${pinId}/comments`)
  },

  createComment: (pinId: string, data: CreateCommentInput) => {
    return $fetch<CommentDetails>(`/api/pins/${pinId}/comments`, {
      method: 'POST',
      body: data,
    })
  },
}
