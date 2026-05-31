import mongoose from 'mongoose'

const { Schema, model, models } = mongoose

const pinSchema = new Schema({
  media: {
    type: String,
    required: true,
    trim: true,
  },
  width: {
    type: Number,
    required: true,
    min: 1,
  },
  height: {
    type: Number,
    required: true,
    min: 1,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100,
  },
  description: {
    type: String,
    default: '',
    maxLength: 255,
  },
  link: {
    type: String,
    default: null,
    trim: true,
  },
  board: {
    type: Schema.Types.ObjectId,
    default: null,
    ref: 'Board',
  },
  tags: {
    type: [String],
    default: [],
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

export const PinModel = models.Pin || model('Pin', pinSchema)
