import type { Comment } from '#layers/comment/shared/types/comment'

export type GetCommentsParams = {
  pinId: string
}

export type CreateCommentInput = Pick<
  Comment,
  | 'pin'
  | 'user'
  | 'description'
>
