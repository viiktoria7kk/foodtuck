/**
 * @openapi
 * components:
 *   schemas:
 *     CreateCheekoutDto:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - phone
 *         - address
 *         - city
 *         - country
 *         - total
 *         - dishesId
 *       properties:
 *         firstName:
 *           type: string
 *           description: The user's first name.
 *           example: John
 *         lastName:
 *           type: string
 *           description: The user's last name.
 *           example: Doe
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address.
 *           example: user@example.com
 *         phone:
 *           type: string
 *           description: The user's phone number.
 *           example: "+1234567890"
 *         address:
 *           type: string
 *           description: The user's shipping address.
 *           example: 123 Main St
 *         city:
 *           type: string
 *           description: The user's city.
 *           example: City
 *         country:
 *           type: string
 *           description: The user's country.
 *           example: Country
 *         total:
 *           type: number
 *           description: The total cost of the order.
 *           example: 100.00
 *         dishesId:
 *           type: array
 *           items:
 *             type: string
 *             format: ObjectId
 *           description: The IDs of the dishes in the order.
 *           example: ["60f7b1b4b3f3b3b3b3b3b3b3", "60f7b1b4b3f3b3b3b3b3b3b"]
 */
export class CreateCheekoutDto {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  country: string
  total: number
  dishesId: string[]
}
