import type { CreateUserInput } from '#layers/user/server/types/user'
import { UserModel } from '#layers/user/server/models/user.model'

export const createUser = (input: CreateUserInput) => {
  return UserModel.create(input)
}

export const findUserByEmail = (email: string) => {
  return UserModel
    .findOne()
    .where('email')
    .equals(email)
    .exec()
}

export const findUserByEmailWithPassword = (email: string) => {
  return UserModel
    .findOne()
    .where('email')
    .equals(email)
    .select('+password')
    .exec()
}

export const findUserByUsername = (username: string) => {
  return UserModel
    .findOne()
    .where('username')
    .equals(username)
    .exec()
}

export const findUserById = (id: string) => {
  return UserModel
    .findOne()
    .where('_id')
    .equals(id)
    .exec()
}
