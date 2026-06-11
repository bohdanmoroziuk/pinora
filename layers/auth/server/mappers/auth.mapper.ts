// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapAuthUser = (document: any) => {
  return {
    id: document._id.toString(),
    fullName: document.fullName.toString(),
    username: document.username.toString(),
    email: document.email.toString(),
    avatar: document.avatar,
  }
}
