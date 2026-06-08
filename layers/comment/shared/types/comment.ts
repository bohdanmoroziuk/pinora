export type Comment = {
  id: string
  description: string
  pin: string
  user: string
  createdAt: string
  updatedAt: string
}

export type CommentDetails = Omit<Pin, 'user'> & { user: CommentAuthor }

export type CommentAuthor = Pick<User, 'id' | 'fullName' | 'username' | 'avatar'>
