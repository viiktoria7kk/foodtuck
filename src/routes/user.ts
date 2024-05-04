import { Router } from 'express';
import { UserController } from '../controllers/user';

export const userRouter = Router();
const userController = new UserController();

/**
 * @openapi
 * tags:
 *   name: Users
 *   description: Operations related to users
 */

/**
 * @openapi
 * /user:
 *  get:
 *   tags:
 *    - Users
 *   summary: Get all users
 *   responses:
 *    '200':
 *     description: A list of users
 *    '400':
 *     description: Bad request
 *    '500':
 *     description: Internal server error
 */
userRouter.get('/', userController.getUser);

/**
 * @openapi
 * /user:
 *  put:
 *   tags:
 *    - Users
 *   summary: Update a user
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    '200':
 *     description: Updated
 *    '400':
 *     description: Bad request
 *    '500':
 *     description: Internal server error
 */
userRouter.put('/', userController.updateUser);

/**
 * @openapi
 * /user/{id}:
 *  delete:
 *   tags:
 *    - Users
 *   summary: Delete a user
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *       type: string
 *      description: User id
 *   responses:
 *    '200':
 *     description: Deleted
 *    '400':
 *     description: Bad request
 *    '500':
 *     description: Internal server error
 */
userRouter.delete('/:id', userController.deleteUser);

/**
 * @openapi
 * /user/{id}:
 *  get:
 *   tags:
 *    - Users
 *   summary: Get a user by id
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *       type: string
 *      description: User id
 *   responses:
 *    '200':
 *     description: A user object
 *    '400':
 *     description: Bad request
 *    '404':
 *     description: User not found
 *    '500':
 *     description: Internal server error
 */
userRouter.get('/:id', userController.getUserById);

/**
 * @openapi
 * /user/email/{email}:
 *  get:
 *   tags:
 *    - Users
 *   summary: Get a user by email
 *   parameters:
 *    - in: path
 *      name: email
 *      required: true
 *      schema:
 *       type: string
 *      description: User email
 *   responses:
 *    '200':
 *     description: A user object
 *    '400':
 *     description: Bad request
 *    '404':
 *     description: User not found
 *    '500':
 *     description: Internal server error
 */
userRouter.get('/email/:email', userController.getUserByEmail);

/**
 * @openapi
 * /user/sign-up:
 *  post:
 *   tags:
 *    - Users
 *   summary: Sign up
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/SignUpDto'
 *   responses:
 *    '200':
 *     description: Created
 *    '400':
 *     description: Bad request
 *    '500':
 *     description: Internal server error
 */
userRouter.post('/sign-up', userController.signUp);

/**
 * @openapi
 * /user/sign-in:
 *  post:
 *   tags:
 *    - Users
 *   summary: Sign in
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/SignInDto'
 *   responses:
 *    '200':
 *     description: Authenticated
 *    '400':
 *     description: Bad request
 *    '401':
 *     description: Unauthorized
 *    '500':
 *     description: Internal server error
 */
userRouter.post('/sign-in', userController.signIn);
