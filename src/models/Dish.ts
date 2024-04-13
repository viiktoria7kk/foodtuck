import { Schema, model } from 'mongoose'
import { Categories } from 'src/enums/Category'

export interface IDish {
  title: string
  description: string
  category: Categories
  price: string
  img: string
}

export const DishSchema = new Schema<IDish>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: String, required: false },
})

export const Dish = model<IDish>('Dish', DishSchema)
