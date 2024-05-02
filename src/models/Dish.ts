import { Schema, model } from 'mongoose'
import { Categories } from '../utils/enums/categories'

export interface IDish {
  img: string
  calories: number
  category: string[]
  tags: string[]
  rating: number 
  receipe: string[]
  description: string
  title: string
  price: number
}

/**
 * @openapi
 * components:
 *   schemas:
 *     Dish:
 *       type: object
 *       properties:
 *         img:
 *           type: string
 *         calories:
 *           type: number
 *         category:
 *           type: array
 *           items:
 *             type: string
 *             enum:
 *               - "Breakfast"
 *               - "Lunch"
 *               - "Dinner"
 *               - "Dessert"
 *               - "Drink"
 *               - "Suops"
 *               - "StarterMenu"
 *               - "MainCourse"
 *               - "Salad"
 *               - "Vegetarian"
 *               - "FastFood"
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *         rating:
 *           type: number
 *           minimum: 0
 *           maximum: 5
 *         receipe:
 *           type: array
 *           items:
 *             type: string
 *         description:
 *           type: string
 *         title:
 *           type: string
 *         price:
 *           type: number
 *       required:
 *         - category
 *         - tags
 *         - rating
 *         - receipe
 *         - description
 *         - title
 *         - price
 */

export const DishSchema = new Schema<IDish>(
  {
    img: { type: String, required: false },
    calories: { type: Number, required: false },
    category: { type: [String], enum: Object.values(Categories), required: true },
    tags: { type: [String], required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    receipe: { type: [String], required: true },
    description: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
)

export const Dish = model<IDish>('Dish', DishSchema)
