import { getAuthUser } from '#layers/auth/server/services/auth.service'

export default defineEventHandler(async (event) => {
  const token = getAuthCookie(event)

  invariant(token, 401, 'Unauthenticated')

  const authUser = await getAuthUser(token)

  return authUser
})
