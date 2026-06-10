import type { CreateUserInput, GetUserProfileByUsernameInput } from '#layers/user/server/types/user'
import { countUserFollowers, countUserFollowing, isUserFollowing } from '#layers/user/server/services/follow.service'
import { UserModel } from '#layers/user/server/models/user.model'
import { mapUser } from '#layers/user/server/mappers/user.mapper'

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

export const getUserProfileByUsername = async (input: GetUserProfileByUsernameInput) => {
  const user = await findUserByUsername(input.username)

  if (!user) return null

  const userId = user._id.toString()

  const [followersCount, followingCount, isFollowing] = await Promise.all([
    countUserFollowers(userId),
    countUserFollowing(userId),
    input.authUserId
      ? await isUserFollowing({
          follower: input.authUserId,
          following: userId,
        })
      : false,
  ])

  return {
    ...mapUser(user),
    followersCount,
    followingCount,
    isFollowing,
  }
}
