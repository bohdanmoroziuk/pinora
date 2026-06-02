import { getPins } from '#layers/pin/app/repositories/pin.repository'

export const usePinsStore = defineStore('pins', () => {
  const pins = ref<Pin[]>([])

  const loadPins = async () => {
    pins.value = await getPins()
  }

  return {
    pins,
    loadPins,
  }
})
