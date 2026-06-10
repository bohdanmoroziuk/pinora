import mongoose from 'mongoose'

const { Schema, models, model } = mongoose

const followSchema = new Schema({
  follower: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  following: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
}, {
  timestamps: true,
  toJSON: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transform: (_doc, ret: any) => {
      ret.id = ret._id

      delete ret._id
      delete ret.__v

      return ret
    },
  },
})

followSchema.index({
  follower: 1,
  following: 1,
}, {
  unique: true,
})

export const FollowModel = models.Follow || model('Follow', followSchema)
