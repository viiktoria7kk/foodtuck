import { Types } from 'mongoose'

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateCommentDto:
 *       type: object
 *       required:
 *         - userId
 *         - content
 *         - postId
 *       properties:
 *         userId:
 *           type: ObjectId
 *           description: The identifier of the user leaving the comment.
 *           example: "60f7b1b4b3f3b3b3b3b3b3b3"
 *         content:
 *           type: string
 *           description: The content of the comment.
 *           example: "Very interesting post! Thanks for the information."
 *         postId:
 *           type: ObjectId
 *           description: The identifier of the post to which the comment is attached.
 *           example: "60f7b1b4b3f3b3b3b3b3b3b3"
 */
export class CreateCommentDto {
  userId: Types.ObjectId
  content: string
  postId: Types.ObjectId
}
