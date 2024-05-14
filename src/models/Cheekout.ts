import { Schema, Types, model } from 'mongoose'

export interface ICheekout {
  id: Types.ObjectId
  name: string
  email: string
  dishesId: Types.ObjectId[]
  phone: string
  address: string
  city: string 
  country: string
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
 *         dishesId:
 *           type: array
 *           items:
 *             type: string
 *             format: ObjectId
 *         phone:
 *           type: string
 *         address:
 *           type: string
 *         city:
 *           type: string
 *         country:
 *           type: string
 *         total:
 *           type: number
 *       required:
 *         - name
 *         - email
 *         - dishesId
 *         - phone
 *         - address
 *         - city
 *         - country
 *         - total
 */

export const CheekoutSchema = new Schema<ICheekout>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dishesId: { type: [Types.ObjectId], required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  total: { type: Number, required: true },
})

export const Cheekout = model<ICheekout>('Cheekout', CheekoutSchema)
