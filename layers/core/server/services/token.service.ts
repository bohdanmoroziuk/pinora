import jwt from 'jsonwebtoken'

import type {
  Secret as TokenSecret,
  SignOptions as TokenSignOptions,
  VerifyOptions as TokenVerifyOptions,
} from 'jsonwebtoken'

export type {
  TokenSecret,
  TokenSignOptions,
  TokenVerifyOptions,
}

export const signToken = <TTokenPayload extends object>(
  payload: TTokenPayload,
  secret: TokenSecret,
  options?: TokenSignOptions,
) => {
  return jwt.sign(payload, secret, options)
}

export const verifyToken = <TTokenPayload extends object>(
  token: string,
  secret: TokenSecret,
  options?: TokenVerifyOptions,
) => {
  return jwt.verify(token, secret, options) as TTokenPayload
}
