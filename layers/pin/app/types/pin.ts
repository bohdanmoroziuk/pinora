export type GetFeedPinsParams = Record<string, unknown>

export type GetUserPinsParams = GetFeedPinsParams & {
  userId: string
}
