import { deleteAuthCookie } from '#layers/auth/server/utils/auth-cookie'

export default defineEventHandler((event) => {
  deleteAuthCookie(event)

  return {
    message: 'Logged out successfully',
  }
})
