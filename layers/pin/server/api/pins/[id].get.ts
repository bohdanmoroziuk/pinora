import { getPinDetailsById } from '#layers/pin/server/services/pin.service'
import { getPinDetailsByIdParamsSchema } from '#layers/pin/server/schemas/pin.schema'

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, getPinDetailsByIdParamsSchema.parse)
  const pin = await getPinDetailsById(params.id)

  invariant(pin != null, 404, 'Pin not found')

  return pin
})
