import mongoose from 'mongoose'
import type { GetBoardsInput } from '#layers/board/server/types/board'
import { BoardModel } from '#layers/board/server/models/board.model'

const { Types } = mongoose

export const getBoards = (input: GetBoardsInput) => {
  return BoardModel.aggregate([
    {
      $match: {
        user: new Types.ObjectId(input.userId),
      },
    },
    {
      $lookup: {
        from: 'pins',
        localField: '_id',
        foreignField: 'board',
        as: 'pins',
      },
    },
    {
      $project: {
        id: { $toString: '$_id' },
        title: 1,
        user: { $toString: '$user' },
        pinsCount: { $size: '$pins' },
        coverMedia: { $arrayElemAt: ['$pins.media', 0] },
        createdAt: 1,
        updatedAt: 1,
        _id: 0,
      },
    },
  ])
}
