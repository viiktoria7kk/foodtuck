import { Schema, model } from "mongoose";
import { DishType } from "src/types/Dish";

export interface ICheekout {
  name: string;
  email: string;
  dishes: DishType[];
  phone: string;
  address: string;
  total: number;
}

export const CheekoutSchema = new Schema<ICheekout>({
  name: { type: String, required: true },
  email: { type: String, required: false },
  dishes: { type: [String], required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  total: { type: Number, required: false },
});

export const Cheekout = model<ICheekout>("Cheekout", CheekoutSchema);