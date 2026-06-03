import { findUserByUsername } from '#layers/user/server/services/user.service'

export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, 'username')

  invariant(username != undefined, 400, 'Username not provided')

  const user = await findUserByUsername(username)

  invariant(user != null, 404, 'User not found')

  return user
})
