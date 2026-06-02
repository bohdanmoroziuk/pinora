import { PinModel } from '#layers/pin/server/models/pin.model'

export const getPins = () => {
  return PinModel.find().exec()
}
