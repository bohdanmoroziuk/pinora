import type { GetFeedPinsParams, GetUserPinsParams } from '#layers/pin/app/types/pin'

export const getFeedPins = (params: GetFeedPinsParams) => {
  return $fetch<Pin[]>('/api/pins', {
    query: params,
  })
}

export const getUserPins = (params: GetUserPinsParams) => {
  return $fetch<Pin[]>('/api/pins', {
    query: params,
  })
}

export const getPinById = (id: string) => {
  return $fetch<PinDetails>(`/api/pins/${id}`)
}
