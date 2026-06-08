import type { CommentDetails } from '#layers/comment/shared/types/comment'
import type { GetCommentsParams } from '#layers/comment/app/types/comment'

export const getComments = (params: GetCommentsParams) => {
  return $fetch<CommentDetails[]>(`/api/pins/${params.pinId}/comments`)
}
