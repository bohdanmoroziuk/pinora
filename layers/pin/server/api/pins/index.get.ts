import { getPins } from '#layers/pin/server/services/pin.service'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const userId = query.userId as string | undefined

  const pins = await getPins({
    userId,
  })

  return pins
})
