import mongoose from 'mongoose'

export const connectMongoose = async () => {
  const config = useRuntimeConfig()

  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection
  }

  try {
    await mongoose.connect(config.mongodbUri)

    console.log('Connected to MongoDB')

    return mongoose.connection
  }
  catch (error) {
    console.error('Failed to connect to MongoDB', error)

    throw error
  }
}

export const disconnectMongoose = async () => {
  if (mongoose.connection.readyState === 0) {
    return
  }

  try {
    await mongoose.disconnect()

    console.log('Disconnected from MongoDB')
  }
  catch (error) {
    console.error('Failed to disconnect from MongoDB', error)

    throw error
  }
}
