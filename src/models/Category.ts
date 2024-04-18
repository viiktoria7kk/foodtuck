import { Schema, model } from 'mongoose'
import { Categories } from 'src/enums/Category'

export interface ICategory {
  value: Categories
}

/**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - value
 *       properties:
 *         value:
 *           type: string
 *           default: 'Main Course'
 *           description: The category of the dish
 *           example: 'Dessert'
 */

export const CategorySchema = new Schema<ICategory>({
  value: { type: String, required: true },
})

export const Category = model<ICategory>('Category', CategorySchema)
