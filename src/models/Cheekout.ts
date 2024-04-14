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

export const CheekoutSchema = new Schema<ICheekout>({
  name: { type: String, required: true },
  email: { type: String, required: false },
  dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  phone: { type: String, required: true },
  address: { type: String, required: true },
  total: { type: Number, required: false },
})

export const Cheekout = model<ICheekout>('Cheekout', CheekoutSchema)
