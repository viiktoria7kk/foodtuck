/**
 * @openapi
 * components:
 *   schemas:
 *     SignInDto:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address.
 *           example: "user@example.com"
 *         password:
 *           type: string
 *           format: password
 *           description: The user's password.
 *           example: "Password123"
 */
export class SignInDto {
  /**
   * The user's email address.
   * @example
   * "user@example.com"
   */
  email: string;
  /**
   * The user's password.
   * @example
   * "Password123"
   */
  password: string;
}