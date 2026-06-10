import type { ToggleUserFollowInput, FindFollowByUsersInput } from '#layers/user/server/types/follow'
import { findUserByUsername } from '#layers/user/server/services/user.service'
import { FollowModel } from '#layers/user/server/models/follow.model'

export const findFollowByUsers = async (input: FindFollowByUsersInput) => {
  return FollowModel
    .findOne()
    .where('follower')
    .equals(input.follower)
    .where('following')
    .equals(input.following)
    .exec()
}

export const isUserFollowing = async (input: FindFollowByUsersInput) => {
  const follow = await findFollowByUsers(input)

  return Boolean(follow)
}

export const toggleUserFollow = async (input: ToggleUserFollowInput) => {
  const userToFollow = await findUserByUsername(input.username)

  invariant(userToFollow, 404, 'User not found')

  const followingId = userToFollow._id.toString()

  invariant(input.follower != followingId, 400, 'You cannot follow yourself')

  const existingFollow = await findFollowByUsers({
    follower: input.follower,
    following: followingId,
  })

  if (existingFollow) {
    await existingFollow.deleteOne()

    return {
      isFollowing: false,
    }
  }

  await FollowModel.create({
    follower: input.follower,
    following: followingId,
  })

  return {
    isFollowing: true,
  }
}

export const countUserFollowers = async (userId: string) => {
  return FollowModel.countDocuments({ following: userId })
}

export const countUserFollowing = async (userId: string) => {
  return FollowModel.countDocuments({ follower: userId })
}
