// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapAuthUser = (document: any) => {
  const { _id: id, __v, password, createdAt, updatedAt, ...fields } = document.toObject()

  return {
    id,
    ...fields,
  }
}
