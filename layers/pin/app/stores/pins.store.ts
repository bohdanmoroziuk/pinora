import { getPins, getPinById } from '#layers/pin/app/repositories/pin.repository'

export const usePinsStore = defineStore('pins', () => {
  const pins = ref<Pin[]>([])
  const pin = ref<Pin | null>(null)

  const loadPins = async () => {
    pins.value = await getPins()
  }

  const loadPinById = async (id: string) => {
    pin.value = await getPinById(id)
  }

  return {
    pins,
    pin,
    loadPins,
    loadPinById,
  }
})
