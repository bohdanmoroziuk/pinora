import { UserModel } from '#layers/user/server/models/user.model'

type CreateUserInput = {
  fullName: string
  username: string
  email: string
  password: string
}

export const createUser = (input: CreateUserInput) => {
  return UserModel.create(input)
}

export const findUserByEmail = (email: string) => {
  return UserModel.findOne().where('email').equals(email).exec()
}

export const findUserByUsername = (username: string) => {
  return UserModel
    .findOne()
    .where('username')
    .equals(username)
    .exec()
}
