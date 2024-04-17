import { Schema, model } from 'mongoose'

export interface IPost {
  img: String[]
  date: Date
  title: string
  description: string
  text: string
  comments: Comment[]
}

export const PostSchema = new Schema<IPost>({
  img: [{ type: String, required: true }],
  date: { type: Date, required: false, default: Date.now },
  title: { type: String, required: true },
  description: { type: String, required: true },
  text: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
})

export const Post = model<IPost>('Post', PostSchema)
