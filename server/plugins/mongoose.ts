export default defineNitroPlugin(async () => {
  await connectMongoose()

  const shutdown = async () => {
    await disconnectMongoose()
    process.exit(0)
  }

  process.once('SIGINT', shutdown)
  process.once('SIGTERM', shutdown)
})
