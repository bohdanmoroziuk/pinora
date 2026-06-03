import { getPinDetailsById } from '#layers/pin/server/services/pin.service'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  invariant(id != undefined, 400, 'Id not provided')

  const pin = await getPinDetailsById(id)

  invariant(pin != null, 404, 'Pin not found')

  return pin
})
