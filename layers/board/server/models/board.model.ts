import mongoose from 'mongoose'

const { Schema, model, models } = mongoose

const boardSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100,
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

export const BoardModel = models.Board || model('Board', boardSchema)
