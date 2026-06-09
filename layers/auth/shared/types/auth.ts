import type { User } from '#layers/user/shared/types/user'

export type AuthUser = Pick<
  User,
  'id' | 'fullName' | 'username' | 'email' | 'avatar'
>
