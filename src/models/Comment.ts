import { Schema, Types, model } from 'mongoose'
import { UserType } from 'src/types/User'

export interface IComment {
  user: UserType
  content: string
  date: Date
  postId: Types.ObjectId
}

/**
 * @openapi
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - user
 *         - content
 *       properties:
 *         user:
 *           type: string
 *           description: The ID of the user who made the comment
 *           example: '610d08a22c076b0015f42d5d'
 *         content:
 *           type: string
 *           description: The content of the comment
 *           example: 'Great post!'
 *         date:
 *           type: string
 *           format: date-time
 *           description: The date and time when the comment was made
 *           example: '2024-04-18T12:00:00Z'
 *         postId:
 *           type: objectId
 *           description: The ID of the post the comment belongs to
 *           example: '610d08a22c076b0015f42d5d'
 */

export const CommentSchema = new Schema<IComment>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  date: { type: Date, required: false, default: Date.now },
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
})

export const Comment = model<IComment>('Comment', CommentSchema)
