import { Schema, model } from 'mongoose'

export interface IChef {
  name: string
  avatar: string
}

export const ChefSchema = new Schema<IChef>({
  name: { type: String, required: true },
  avatar: { type: String, required: false },
})

export const Chef = model<IChef>('Chef', ChefSchema)
