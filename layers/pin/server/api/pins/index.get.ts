import { getPins } from '#layers/pin/server/services/pin.service'

export default defineEventHandler(async () => {
  const pins = await getPins()

  return pins
})
