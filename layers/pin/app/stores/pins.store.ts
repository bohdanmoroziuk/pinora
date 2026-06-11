import type { Pin, PinDetails } from '#layers/pin/shared/types/pin'
import type { GetFeedPinsParams } from '#layers/pin/app/types/pin'
import { getFeedPins, getUserPins, getPinById } from '#layers/pin/app/repositories/pin.repository'

export const usePinsStore = defineStore('pins', () => {
  const feedPins = ref<Pin[]>([])
  const userPins = ref<Pin[]>([])
  const pin = ref<Nullable<PinDetails>>(null)

  const loadFeedPins = async (params: GetFeedPinsParams) => {
    feedPins.value = await getFeedPins(params)
  }

  const loadUserPins = async (userId: string) => {
    userPins.value = await getUserPins({ userId })
  }

  const loadPinById = async (id: string) => {
    pin.value = await getPinById(id)
  }

  return {
    feedPins,
    userPins,
    pin,
    loadFeedPins,
    loadUserPins,
    loadPinById,
  }
})
