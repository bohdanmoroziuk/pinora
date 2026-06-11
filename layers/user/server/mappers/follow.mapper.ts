// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapFollow = (document: any) => {
  return {
    id: document._id.toString(),
    follower: document.follower.toString(),
    following: document.following.toString(),
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  }
}
