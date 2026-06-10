import type { H3Event } from 'h3'
import { verifyAuthToken } from '#layers/auth/server/services/auth-token.service'

export const requireAuthUserId = (event: H3Event) => {
  const token = getAuthCookie(event)

  invariant(token, 401, 'Unauthenticated')

  const payload = verifyAuthToken(token)

  invariant(payload.userId, 401, 'Unauthenticated')

  return payload.userId
}
