import { DishType } from './Dish'

export type CheekoutType = {
  name: string
  email: string
  dishes: DishType[]
  phone: string
  address: string
  total: number
}
