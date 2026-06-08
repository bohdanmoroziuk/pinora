import mongoose from 'mongoose'

const { Schema, model, models } = mongoose

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    type: String,
    default: null,
  },
}, {
  timestamps: true,
  toJSON: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transform: (_doc, ret: any) => {
      ret.id = ret._id

      delete ret._id
      delete ret.__v
      delete ret.password

      return ret
    },
  },
})

export const UserModel = models.User || model('User', userSchema)
