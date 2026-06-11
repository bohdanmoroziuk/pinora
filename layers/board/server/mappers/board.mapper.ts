// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapBoard = (document: any) => {
  return {
    id: document._id,
    title: document.title,
    user: document.user,
    pinsCount: document.pinsCount,
    coverMedia: document.coverMedia,
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  }
}
