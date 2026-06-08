import type { GetCommentsParams } from '#layers/comment/server/types/comment'
import { CommentModel } from '#layers/comment/server/models/comment.model'

export const getComments = (params: GetCommentsParams) => {
  return CommentModel
    .find()
    .where('pin')
    .equals(params.pinId)
    .populate('user', 'id fullName username avatar')
    .sort({ createdAt: -1 })
    .exec()
}
