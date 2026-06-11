/* eslint-disable @typescript-eslint/no-explicit-any */

export const mapComment = (document: any) => {
  return {
    id: document._id.toString(),
    description: document.description.toString(),
    pin: document.pin.toString(),
    user: document.user.toString(),
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  }
}

export const mapCommentDetails = (document: any) => {
  return {
    id: document._id.toString(),
    description: document.description.toString(),
    pin: document.pin.toString(),
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
