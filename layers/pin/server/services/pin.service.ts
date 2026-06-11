import type { GetPinsInput } from '#layers/pin/server/types/pin'
import { PinModel } from '#layers/pin/server/models/pin.model'

export const getPins = (input: GetPinsInput) => {
  let query = PinModel.find()

  if (input.userId) {
    query = query
      .where('user')
      .equals(input.userId)
  }

  if (input.boardId) {
    query = query
      .where('board')
      .equals(input.boardId)
  }

  if (input.search) {
    query = query
      .where('title')
      .regex(new RegExp(input.search, 'i'))
  }

  return query
    .sort({ createdAt: -1 })
    .exec()
}

export const getPinById = (id: string) => {
  return PinModel
    .findOne()
    .where('_id')
    .equals(id)
    .exec()
}

export const getPinDetailsById = (id: string) => {
  return PinModel
    .findOne()
    .where('_id')
    .equals(id)
    .populate('user', 'id fullName username avatar')
    .exec()
}
