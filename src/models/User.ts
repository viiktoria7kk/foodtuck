import { Schema, model, connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
export interface IUser {
  name: string
  email: string
  password: string
  avatar: string
}

export const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: false },
})

export const User = model<IUser>('User', UserSchema)
