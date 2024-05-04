import { Categories } from '../utils/enums/categories'
import { Dish, IDish } from '../models/Dish'

export class DishService {
  public async createDish(dish: IDish): Promise<IDish> {
    try {
      const newDish = new Dish(dish)
      await newDish.save()
      return newDish
    } catch (error) {
      throw error
    }
  }

  public async getDish(): Promise<IDish[]> {
    try {
      const dishes = await Dish.find()
      return dishes
    } catch (error) {
      throw error
    }
  }

  public async updateDish(dish: IDish): Promise<IDish | null> {
    try {
      const updatedDish = await Dish.findByIdAndUpdate(dish.id, dish, { new: true })
      return updatedDish
    } catch (error) {
      throw error
    }
  }

  public async deleteDish(id: string): Promise<string> {
    try {
      await Dish.findByIdAndDelete({ _id: id })
      return 'Dish deleted successfully'
    } catch (error) {
      throw error
    }
  }

  public async getDishById(id: string): Promise<IDish | null> {
    try {
      const dish = await Dish.findById({ _id: id })
      return dish
    } catch (error) {
      throw error
    }
  }

  public async getDishesByCategory(category: Categories): Promise<IDish[]> {
    try {
      const dishes = await Dish.find({ category: category })
      return dishes
    } catch (error) {
      throw error
    }
  }
}
