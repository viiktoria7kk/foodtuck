import { Schema, Types, model } from 'mongoose'

export interface IComment {
  id: Types.ObjectId
  userId: Types.ObjectId
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
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier of the comment.
 *           example: "60f7b1b4b3f3b3b3b3b3b3b3"
 *         userId:
 *           type: string
 *           description: The unique identifier of the user who posted the comment.
 *           example: "60f7b1b4b3f3b3b3b3b3b3b3"
 *         content:
 *           type: string
 *           description: The content of the comment.
 *           example: "This is a great post!"
 *         date:
 *           type: string
 *           format: date-time
 *           description: The date and time when the comment was posted.
 *           example: "2024-05-10T12:00:00Z"
 *         postId:
 *           type: string
 *           description: The unique identifier of the post to which the comment is attached.
 *           example: "60f7b1b4b3f3b3b3b3b3b3b3"
 */


export const CommentSchema = new Schema<IComment>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  date: { type: Date, required: false, default: Date.now },
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
})

export const Comment = model<IComment>('Comment', CommentSchema)
