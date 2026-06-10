import type { AuthTokenPayload } from '#layers/auth/server/types/auth-token'
import { signToken, verifyToken } from '#layers/core/server/services/token.service'

export const getAuthTokenSecret = () => {
  const config = useRuntimeConfig()

  invariant(config.authTokenSecret, 500, 'Auth token secret not configured')

  return config.authTokenSecret
}

export const signAuthToken = (payload: AuthTokenPayload) => {
  return signToken<AuthTokenPayload>(
    payload,
    getAuthTokenSecret(),
    {
      expiresIn: '7d',
    },
  )
}

export const verifyAuthToken = (token: string) => {
  return verifyToken<AuthTokenPayload>(
    token,
    getAuthTokenSecret(),
  )
}
