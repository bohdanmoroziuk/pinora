import type { GetPinsInput } from '#layers/pin/server/types/pin'
import { pinRepository } from '#layers/pin/server/repositories/pin.repository'
import { mapPin, mapPinDetails } from '#layers/pin/server/mappers/pin.mapper'

export const getPins = async (input: GetPinsInput) => {
  const pins = await pinRepository.getMany(input)

  return pins.map(mapPin)
}

export const getPinDetailsById = async (id: string) => {
  const pinDetails = await pinRepository.getOneById(id)

  return mapPinDetails(pinDetails)
}
