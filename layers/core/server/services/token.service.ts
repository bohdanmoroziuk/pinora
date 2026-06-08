import jwt from 'jsonwebtoken'

import type {
  Secret as TokenSecret,
  SignOptions as TokenSignOptions,
} from 'jsonwebtoken'

export type {
  TokenSecret,
  TokenSignOptions,
}

export type TokenPayload = string | object | Buffer<ArrayBufferLike>

export const signToken = (
  payload: TokenPayload,
  secret: TokenSecret,
  options?: TokenSignOptions,
) => {
  return jwt.sign(payload, secret, options)
}

export const getTokenSecret = () => {
  const config = useRuntimeConfig()

  invariant(config.tokenSecret, 500, 'Token secret is not configured')

  return config.tokenSecret
}
