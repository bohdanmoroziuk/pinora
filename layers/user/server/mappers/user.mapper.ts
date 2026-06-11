// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapUser = (document: any) => {
  return {
    id: document._id.toString(),
    fullName: document.fullName.toString(),
    username: document.username.toString(),
    email: document.email.toString(),
    avatar: document.avatar,
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  }
}
