export type Pin = {
  id: string
  media: string
  width: number
  height: number
  title: string
  description: string
  link: Nullable<string>
  board: Nullable<string>
  tags: string[]
  user: string
  createdAt: string
  updatedAt: string
}

export type PinDetails = Omit<Pin, 'user'> & { user: PinAuthor }

export type PinAuthor = Pick<User, 'id' | 'fullName' | 'username' | 'avatar'>
