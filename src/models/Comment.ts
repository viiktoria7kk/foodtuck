import { Schema, model } from 'mongoose'
import { UserType } from 'src/types/User'

export interface IComment {
  user: UserType
  content: string
  date: Date
  postId: string
}

export const CommentSchema = new Schema<IComment>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  date: { type: Date, required: false, default: Date.now },
})

export const Comment = model<IComment>('Comment', CommentSchema)
