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
 * /comment:
 *   post:
 *     tags:
 *       - Comment
 *     summary: Create a new comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
commentRouter.post('/', commentController.createComment)

/**
 * @openapi
 * /comment:
 *   get:
 *     tags:
 *       - Comment
 *     summary: Get all comments
 *     responses:
 *       '200':
 *         description: A list of comments
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
commentRouter.get('/', commentController.getComment)

/**
 * @openapi
 * /comment/{id}:
 *   get:
 *     tags:
 *       - Comment
 *     summary: Get a comment by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A comment object
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
 * /comment/{id}:
 *   delete:
 *     tags:
 *       - Comment
 *     summary: Delete a comment by id
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

/**
 * @openapi
 * /comment/name/{name}:
 *   get:
 *     tags:
 *       - Comment
 *     summary: Get a comment by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A comment object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Comment not found
 *       '500':
 *         description: Internal server error
 */
commentRouter.get('/name/:name', commentController.getCommentByName)

/**
 * @openapi
 * /comment/{id}:
 *   put:
 *     tags:
 *       - Comment
 *     summary: Update a comment by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       '200':
 *         description: Updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Comment not found
 *       '500':
 *         description: Internal server error
 */
commentRouter.put('/:id', commentController.updateCommentById)
