/**
 * @openapi
 * components:
 *   schemas:
 *     UpdateUserDto:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The ID of the user
 *           example: '6153ae9c2a9a5d001fb3b8a7'
 *         name:
 *           type: string
 *           description: The name of the user
 *           example: 'John Doe'
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user
 *           example: 'example@example.com'
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the user
 *           example: 'Password123'
 *         avatar:
 *           type: string
 *           description: The URL of the user's avatar (optional)
 *           example: 'https://example.com/avatar.jpg'
 */
export class UpdateUserDto {
  id?: string;

  name?: string;

  email?: string;

  password?: string;

  avatar?: string;
}
