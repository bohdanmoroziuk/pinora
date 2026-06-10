// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapFollow = (document: any) => {
  return {
    id: document._id.toString(),
    followerId: document.followerId.toString(),
    followingId: document.followingId.toString(),
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  }
}
