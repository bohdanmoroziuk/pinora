export const getPins = () => {
  return $fetch<Pin[]>('/api/pins')
}

export const getPinById = (id: string) => {
  return $fetch<PinDetails>(`/api/pins/${id}`)
}
