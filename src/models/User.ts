import { Schema, model, Document, Types } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
  id: Types.ObjectId
  name: string
  email: string
  password: string
  avatar?: string
  matchPassword: (enteredPassword: string) => Promise<boolean>
}

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user
 *           example: 'John Doe'
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user
 *           example: 'example@example.com'
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the user
 *           example: 'Password123'
 *         avatar:
 *           type: string
 *           description: The URL of the user's avatar (optional)
 *           example: 'https://example.com/avatar.jpg'
 */

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: false },
})

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password)
}

export const User = model<IUser>('User', userSchema)
