import type { CreateCommentInput, GetCommentsInput } from '#layers/comment/server/types/comment'
import { commentRepository } from '#layers/comment/server/repositories/comment.repository'
import { mapComment, mapCommentDetails } from '#layers/comment/server/mappers/comment.mapper'

export const getComments = async (input: GetCommentsInput) => {
  const comments = await commentRepository.getMany(input)

  return comments.map(mapCommentDetails)
}

export const createComment = async (input: CreateCommentInput) => {
  const comment = await commentRepository.createOne(input)

  return mapComment(comment)
}
