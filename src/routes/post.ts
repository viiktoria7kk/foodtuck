import { Router } from 'express'
import { PostController } from '../controllers/post'

export const postRouter = Router()
const postController = new PostController()

/**
 * @openapi
 * tags:
 *   name: Posts
 *   description: Operations related to posts
 */

/**
 * @openapi
 * /posts:
 *   post:
 *     tags:
 *       - Posts
 *     summary: Create a new post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePostDto'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
postRouter.post('/', postController.createPost)

/**
 * @openapi
 * /posts:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Get all posts
 *     responses:
 *       '200':
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       '500':
 *         description: Internal server error
 */
postRouter.get('/', postController.getPosts)

/**
 * @openapi
 * /posts/{id}:
 *   get:
 *     tags:
 *       - Posts
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
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
 * /posts/{id}:
 *   delete:
 *     tags:
 *       - Posts
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
