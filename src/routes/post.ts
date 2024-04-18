import { Router } from 'express'
import { PostController } from '../controllers/post'

export const postRouter = Router()
const postController = new PostController()

/**
 * @openapi
 * tags:
 *   name: Post
 *   description: Operations related to posts
 */

/**
 * @openapi
 * /post:
 *   post:
 *     tags:
 *       - Post
 *     summary: Create a new post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
postRouter.post('/', postController.createPost)

/**
 * @openapi
 * /post:
 *   get:
 *     tags:
 *       - Post
 *     summary: Get all posts
 *     responses:
 *       '200':
 *         description: A list of posts
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
postRouter.get('/', postController.getPost)

/**
 * @openapi
 * /post/{id}:
 *   get:
 *     tags:
 *       - Post
 *     summary: Get a post by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A post object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Post not found
 *       '500':
 *         description: Internal server error
 */
postRouter.get('/:id', postController.getPostById)

/**
 * @openapi
 * /post/{id}:
 *   put:
 *     tags:
 *       - Post
 *     summary: Update a post by id
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
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       '200':
 *         description: Updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Post not found
 *       '500':
 *         description: Internal server error
 */
postRouter.put('/:id', postController.updatePost)

/**
 * @openapi
 * /post/{id}:
 *   delete:
 *     tags:
 *       - Post
 *     summary: Delete a post by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Post deleted
 *       '404':
 *         description: Post not found
 *       '500':
 *         description: Internal server error
 */
postRouter.delete('/:id', postController.deletePost)
