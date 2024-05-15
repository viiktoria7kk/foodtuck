import { Types } from 'mongoose';

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateCheekoutDto:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phone
 *         - address
 *         - city
 *         - country
 *         - total
 *         - dishesId
 *       properties:
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: John Doe
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
  name: string
  email: string
  phone: string
  address: string
  city: string
  country: string
  total: number
  dishesId: Types.ObjectId[]
}
