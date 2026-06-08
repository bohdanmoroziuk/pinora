export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig()

  await connectMongoose(config.mongodbUri)

  const shutdown = async () => {
    await disconnectMongoose()
    process.exit(0)
  }

  process.once('SIGINT', shutdown)
  process.once('SIGTERM', shutdown)
})
