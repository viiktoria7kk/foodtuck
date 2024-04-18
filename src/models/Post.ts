import { Schema, model } from 'mongoose'

export interface IPost {
  img: string[]
  date: Date
  title: string
  description: string
  text: string
  comments: string[] // змінено з Comment[] на string[]
}

/**
 * @openapi
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - img
 *         - title
 *         - description
 *         - text
 *       properties:
 *         img:
 *           type: array
 *           items:
 *             type: string
 *           description: The URLs of the post's images
 *           example:
 *             - 'https://example.com/image1.jpg'
 *             - 'https://example.com/image2.jpg'
 *         date:
 *           type: string
 *           format: date-time
 *           description: The date and time when the post was created
 *           example: '2024-04-18T12:00:00Z'
 *         title:
 *           type: string
 *           description: The title of the post
 *           example: 'My Awesome Post'
 *         description:
 *           type: string
 *           description: The description of the post
 *           example: 'This post is about something awesome!'
 *         text:
 *           type: string
 *           description: The main text/content of the post
 *           example: 'Lorem ipsum dolor sit amet...'
 *         comments:
 *           type: array
 *           items:
 *             type: string
 *           description: The IDs of comments associated with the post
 *           example:
 *             - '610d08a22c076b0015f42d5d'
 *             - '610d08a22c076b0015f42d5e'
 */

export const PostSchema = new Schema<IPost>({
  img: [{ type: String, required: true }],
  date: { type: Date, required: false, default: Date.now },
  title: { type: String, required: true },
  description: { type: String, required: true },
  text: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
})

export const Post = model<IPost>('Post', PostSchema)
