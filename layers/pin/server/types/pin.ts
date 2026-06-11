import type { z } from 'zod'
import type { HydratedDocument, Types, QueryFilter } from 'mongoose'
import type { Pin } from '#layers/pin/shared/types/pin'
import type { getPinDetailsByIdParamsSchema, getPinsQuerySchema } from '#layers/pin/server/schemas/pin.schema'

export type PinEntity = Omit<Pin, 'id' | 'user' | 'board'> & {
  user: Types.ObjectId
  board: Nullable<Types.ObjectId>
}

export type PinDocument = HydratedDocument<PinEntity>

export type PinFilter = QueryFilter<PinEntity>

export type GetPinsInput = z.infer<typeof getPinsQuerySchema>

export type GetPinDetailsByIdInput = z.infer<typeof getPinDetailsByIdParamsSchema>
