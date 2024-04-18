import { Schema, model } from 'mongoose'

export interface IChef {
  name: string
  avatar: string
}

/**
 * @openapi
 * components:
 *   schemas:
 *     Chef:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the chef
 *           example: 'John Smith'
 *         avatar:
 *           type: string
 *           description: The URL of the chef's avatar
 *           example: 'https://example.com/avatar.jpg'
 */

export const ChefSchema = new Schema<IChef>({
  name: { type: String, required: true },
  avatar: { type: String, required: false },
})

export const Chef = model<IChef>('Chef', ChefSchema)
