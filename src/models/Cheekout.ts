import { Schema, model } from 'mongoose'
import { Dish } from './Dish'

export interface ICheekout {
  name: string
  email: string
  dishes: Array<typeof Dish>
  phone: string
  address: string
  total: number
}

/**
 * @openapi
 * components:
 *   schemas:
 *     Cheekout:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - address
 *       properties:
 *         name:
 *           type: string
 *           default: 'John Doe'
 *           description: The name of the customer
 *           example: 'John Doe'
 *         email:
 *           type: string
 *           description: The email of the customer
 *           example: 'example@gmail.com'
 *         dishes:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Dish'
 *           description: The list of dishes in the cheekout
 *         phone:
 *           type: string
 *           description: The phone number of the customer
 *         address:
 *           type: string
 *           description: The address of the customer
 *         total:
 *           type: number
 *           description: The total cost of the cheekout
 */

export const CheekoutSchema = new Schema<ICheekout>({
  name: { type: String, required: true },
  email: { type: String, required: false },
  dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  phone: { type: String, required: true },
  address: { type: String, required: true },
  total: { type: Number, required: false },
})

export const Cheekout = model<ICheekout>('Cheekout', CheekoutSchema)




