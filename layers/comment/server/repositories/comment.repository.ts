import type { CreateCommentInput, GetCommentsInput } from '#layers/comment/server/types/comment'
import { CommentModel } from '#layers/comment/server/models/comment.model'

export const commentRepository = {
  getMany(input: GetCommentsInput) {
    return CommentModel
      .find()
      .where('pin')
      .equals(input.pinId)
      .populate('user', 'id fullName username avatar')
      .sort({ createdAt: -1 })
      .exec()
  },

  createOne(input: CreateCommentInput) {
    return CommentModel.create(input)
  },
}
