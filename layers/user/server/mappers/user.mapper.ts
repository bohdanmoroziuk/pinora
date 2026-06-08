// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapUser = (document: any) => {
  const { _id: id, __v, password, ...fields } = document.toObject()

  return {
    id,
    ...fields,
  }
}
