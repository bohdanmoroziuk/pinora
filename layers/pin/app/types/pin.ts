export type GetFeedPinsParams = {
  search?: string
  boardId?: string
}

export type GetUserPinsParams = GetFeedPinsParams & {
  userId: string
}
