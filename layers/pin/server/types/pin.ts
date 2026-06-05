import type { HydratedDocument, Types, QueryFilter } from 'mongoose'
import type { Pin } from '#layers/pin/shared/types/pin'

export type PinEntity = Omit<Pin, 'id' | 'user' | 'board'> & {
  user: Types.ObjectId
  board: Types.ObjectId | null
}

export type PinDocument = HydratedDocument<PinEntity>

export type PinFilter = QueryFilter<PinEntity>

export type GetPinsParams = {
  userId?: string
}
