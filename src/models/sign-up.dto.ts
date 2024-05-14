/**
 * @openapi
 * components:
 *   schemas:
 *     SignUpDto:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: "John Doe"
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
export class SignUpDto {
  /**
   * The user's name.
   * @example
   * "John Doe"
   */
  name: string;
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
