import { getPins } from '#layers/pin/server/services/pin.service'
import { getPinsQuerySchema } from '#layers/pin/server/schemas/pin.schema'

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, getPinsQuerySchema.parse)
  const pins = await getPins(query)

  return pins
})
