import { Router } from 'express'
import { CommentController } from '../controllers/comment'

export const commentRouter = Router()
const commentController = new CommentController()

/**
 * @openapi
 * tags:
 *   name: Comment
 *   description: Operations related to comments
 */

/**
 * @openapi
 * /comments:
 *   post:
 *     tags:
 *       - Comment
 *     summary: Create a new comments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCommentDto'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
commentRouter.post('/', commentController.createComment)

/**
 * @openapi
 * /comments:
 *   get:
 *     tags:
 *       - Comment
 *     summary: Get all comments
 *     responses:
 *       '200':
 *         description: A list of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
commentRouter.get('/', commentController.getComment)

/**
 * @openapi
 * /comments/{id}:
 *   get:
 *     tags:
 *       - Comment
 *     summary: Get a comments by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A comments object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Comment not found
 *       '500':
 *         description: Internal server error
 */
commentRouter.get('/:id', commentController.getCommentById)

/**
 * @openapi
 * /comments/{id}:
 *   delete:
 *     tags:
 *       - Comment
 *     summary: Delete a comments by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Comment deleted
 *       '404':
 *         description: Comment not found
 *       '500':
 *         description: Internal server error
 */
commentRouter.delete('/:id', commentController.deleteComment)
