import type { H3Event } from 'h3'
import { verifyAuthToken } from '#layers/auth/server/services/auth-token.service'

export const getAuthUserId = (event: H3Event) => {
  const token = getAuthCookie(event)

  if (!token) return null

  const payload = verifyAuthToken(token)

  if (!payload.userId) return null

  return payload.userId
}

export const requireAuthUserId = (event: H3Event) => {
  const authUserId = getAuthUserId(event)

  invariant(authUserId, 401, 'Unauthenticated')

  return authUserId
}
