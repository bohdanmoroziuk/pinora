export type GetFeedPinsParams = {
  boardId?: string
}

export type GetUserPinsParams = GetFeedPinsParams & {
  userId: string
}
