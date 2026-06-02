export const getPins = () => {
  return $fetch<Pin[]>('/api/pins')
}
