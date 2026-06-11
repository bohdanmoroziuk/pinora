import type { z } from 'zod'
import type { Comment } from '#layers/comment/shared/types/comment'
import type { getCommentsParamsSchema } from '#layers/comment/server/schemas/comment.schema'

export type GetCommentsInput = z.infer<typeof getCommentsParamsSchema>

export type CreateCommentInput = Pick<
  Comment,
  | 'pin'
  | 'user'
  | 'description'
>
