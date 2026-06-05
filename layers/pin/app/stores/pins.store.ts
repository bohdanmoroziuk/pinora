import type { Pin, PinDetails } from '#layers/pin/shared/types/pin'
import { getFeedPins, getUserPins, getPinById } from '#layers/pin/app/repositories/pin.repository'

export const usePinsStore = defineStore('pins', () => {
  const feedPins = ref<Pin[]>([])
  const userPins = ref<Pin[]>([])
  const pin = ref<PinDetails | null>(null)

  const loadFeedPins = async () => {
    feedPins.value = await getFeedPins({})
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
