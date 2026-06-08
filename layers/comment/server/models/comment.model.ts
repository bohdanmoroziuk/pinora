import mongoose from 'mongoose'

const { Schema, models, model } = mongoose

const commentSchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  pin: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Pin',
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
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

export const CommentModel = models.Comment || model('Comment', commentSchema)
