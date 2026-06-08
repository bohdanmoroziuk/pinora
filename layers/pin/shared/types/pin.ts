export type Pin = {
  id: string
  media: string
  width: number
  height: number
  title: string
  description: string
  link: string | null
  board: string | null
  tags: string[]
  user: string
  createdAt: string
  updatedAt: string
}

export type PinDetails = Omit<Pin, 'user'> & { user: PinAuthor }

export type PinAuthor = Pick<User, 'id' | 'fullName' | 'username' | 'avatar'>
