/* eslint-disable @typescript-eslint/no-explicit-any */

export const mapPin = (document: any) => {
  return {
    id: document._id.toString(),
    media: document.media.toString(),
    width: Number.parseInt(document.width.toString(), 10),
    height: Number.parseInt(document.height.toString()),
    title: document.title.toString(),
    description: document.description.toString(),
    link: document.link,
    board: document.board,
    tags: document.tags,
    user: document.user.toString(),
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  }
}

export const mapPinDetails = (document: any) => {
  return {
    id: document._id.toString(),
    media: document.media.toString(),
    width: Number.parseInt(document.width.toString(), 10),
    height: Number.parseInt(document.height.toString()),
    title: document.title.toString(),
    description: document.description.toString(),
    link: document.link,
    board: document.board,
    tags: document.tags,
    user: {
      id: document.user._id.toString(),
      fullName: document.user.fullName.toString(),
      username: document.user.username.toString(),
      avatar: document.user.avatar,
    },
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  }
}
