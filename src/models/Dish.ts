import { Schema, model } from 'mongoose'
import { Categories } from 'src/enums/Category'

export interface IDish {
  title: string
  description: string
  category: Categories
  price: string
  img: string
}

/**
 * @openapi
 * components:
 *   schemas:
 *     Dish:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - category
 *         - price
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the dish
 *           example: 'Spaghetti Carbonara'
 *         description:
 *           type: string
 *           description: The description of the dish
 *           example: 'Pasta dish with bacon, eggs, and cheese.'
 *         category:
 *           type: string
 *           description: The category of the dish
 *           example: 'Main Course'
 *         price:
 *           type: string
 *           description: The price of the dish
 *           example: '10.99'
 *         img:
 *           type: string
 *           description: The URL of the dish's image
 *           example: 'https://example.com/dish.jpg'
 */

export const DishSchema = new Schema<IDish>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: String, required: false },
})

export const Dish = model<IDish>('Dish', DishSchema)
