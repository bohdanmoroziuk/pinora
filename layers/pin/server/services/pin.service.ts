import { PinModel } from '#layers/pin/server/models/pin.model'

export const getPins = () => {
  return PinModel.find().exec()
}

export const getPinById = (id: string) => {
  return PinModel.findOne().where('_id').equals(id).exec()
}

export const getPinDetailsById = (id: string) => {
  return PinModel
    .findOne()
    .where('_id')
    .equals(id)
    .populate('user', 'id fullName username avatar')
    .exec()
}
