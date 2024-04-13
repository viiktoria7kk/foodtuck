import { Categories } from "src/enums/Category"

export type DishType = {
  title: string
  description: string
  category: Categories
  price: string
  img: string
}