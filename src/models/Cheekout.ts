import { Schema, Types, model } from 'mongoose'
import { Dish } from './Dish'

export interface ICheekout {
  id: Types.ObjectId
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
 *       properties:
 *         id:
 *           type: string
 *           format: ObjectId
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         dishes:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Dish'
 *         phone:
 *           type: string
 *         address:
 *           type: string
 *         total:
 *           type: number
 *       required:
 *         - name
 *         - email
 *         - dishes
 *         - phone
 *         - address
 *         - total
 */

export const CheekoutSchema = new Schema<ICheekout>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish', required: true }],
  phone: { type: String, required: true },
  address: { type: String, required: true },
  total: { type: Number, required: true },
})

export const Cheekout = model<ICheekout>('Cheekout', CheekoutSchema)
