import { Router } from 'express'
import { UserController } from '../controllers/user'

export const userRouter = Router()
const userController = new UserController()

/**
 * @openapi
 * tags:
 *   name: User
 *   description: Operations related to users
 */

/**
 * @openapi
 * /user:
 *   post:
 *     tags:
 *       - User
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
userRouter.post('/', userController.createUser)

/**
 * @openapi
 * /user:
 *   get:
 *     tags:
 *       - User
 *     summary: Get all users
 *     responses:
 *       '200':
 *         description: A list of users
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
userRouter.get('/', userController.getUser)

/**
 * @openapi
 * /user/{id}:
 *   get:
 *     tags:
 *       - User
 *     summary: Get a user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A user object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
userRouter.get('/:id', userController.getUserById)

/**
 * @openapi
 * /user/{id}:
 *   put:
 *     tags:
 *       - User
 *     summary: Update a user by id
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
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: Updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
userRouter.put('/:id', userController.updateUser)

/**
 * @openapi
 * /user/{id}:
 *   delete:
 *     tags:
 *       - User
 *     summary: Delete a user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: User deleted
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
userRouter.delete('/:id', userController.deleteUser)

/**
 * @openapi
 * /user/em/{email}:
 *   get:
 *     tags:
 *       - User
 *     summary: Get a user by email
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A user object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
userRouter.get('/em/:email', userController.getUserByEmail)

/**
 * @openapi
 * /user/login:
 *   post:
 *     tags:
 *       - User
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Logged in successfully
 *       '400':
 *         description: Bad request
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */
userRouter.post('/login', userController.loginUser)

/**
 * @openapi
 * /user/register:
 *   post:
 *     tags:
 *       - User
 *     summary: Register user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: Registered successfully
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
userRouter.post('/register', userController.registerUser)
