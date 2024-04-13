import { Schema, model } from 'mongoose'
import { Categories } from 'src/enums/Category'

export interface ICategory {
  value: Categories
}

export const CategorySchema = new Schema<ICategory>({
  value: { type: String, required: true },
})

export const Category = model<ICategory>('Category', CategorySchema)
