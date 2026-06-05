import type { GetPinsParams } from '#layers/pin/server/types/pin'
import { PinModel } from '#layers/pin/server/models/pin.model'

export const getPins = (params: GetPinsParams) => {
  let query = PinModel.find()

  if (params.userId) {
    query = query
      .where('user')
      .equals(params.userId)
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
