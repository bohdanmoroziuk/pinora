import type { z } from 'zod'
import type { getBoardsQuerySchema } from '#layers/board/server/schemas/board.schema'

export type GetBoardsInput = z.infer<typeof getBoardsQuerySchema>
