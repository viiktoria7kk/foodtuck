import { Router } from 'express'
import { UserController } from '../controllers/user'

export const userRouter = Router()
const userController = new UserController()

/**
 * @openapi
 * tags:
 *   name: Users
 *   description: Operations related to users
 */

/**
 * @openapi
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     responses:
 *       '200':
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '500':
 *         description: Internal server error
 */
userRouter.get('/', userController.getUser)

/**
 * @openapi
 * /users/{id}:
 *   patch:
 *     tags:
 *       - Users
 *     summary: Update a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserDto'
 *     responses:
 *       '200':
 *         description: Updated user object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '500':
 *         description: Internal server error
 */
userRouter.patch('/:id', userController.updateUser)

/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       '200':
 *         description: User deleted
 *       '500':
 *         description: Internal server error
 */
userRouter.delete('/:id', userController.deleteUser)

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get a user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       '200':
 *         description: A user object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
userRouter.get('/:id', userController.getUserById)

/**
 * @openapi
 * /users/email/{email}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get a user by email
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: User email
 *     responses:
 *       '200':
 *         description: A user object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
userRouter.get('/email/:email', userController.getUserByEmail)

/**
 * @openapi
 * /users/sign-up:
 *   post:
 *     tags:
 *       - Users
 *     summary: Sign up
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignUpDto'
 *     responses:
 *       '200':
 *         description: User successfully signed up
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 token:
 *                   type: string
 *       '500':
 *         description: Internal server error
 */
userRouter.post('/sign-up', userController.signUp)

/**
 * @openapi
 * /users/sign-in:
 *   post:
 *     tags:
 *       - Users
 *     summary: Sign in
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignInDto'
 *     responses:
 *       '200':
 *         description: User successfully signed in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 token:
 *                   type: string
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */
userRouter.post('/sign-in', userController.signIn)
