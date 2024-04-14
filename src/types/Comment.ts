import { UserType } from "./User"

export type CommentType = {
  user: UserType
  content: string
  date: Date
}