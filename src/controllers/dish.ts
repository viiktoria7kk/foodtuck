import { DishService } from '../services/dish'
import { validateDish } from '../utils/validation/validation'
import { IDish } from '../models/Dish'
import { Categories } from '../utils/enums/categories'

export class DishController {
  constructor(private dishService: DishService = new DishService()) {}

  public async createDish(dish: IDish): Promise<IDish> {
    const { error } = validateDish(dish)
    if (error) throw new Error(error.details[0].message)
    return await this.dishService.createDish(dish)
  }

  public async getDish(): Promise<IDish[]> {
    return await this.dishService.getDish()
  }

  public async updateDish(dish: IDish): Promise<IDish | null> {
    const { error } = validateDish(dish)
    if (error) throw new Error(error.details[0].message)
    return await this.dishService.updateDish(dish)
  }

  public async deleteDish(id: string): Promise<string> {
    return await this.dishService.deleteDish(id)
  }

  public async getDishById(id: string): Promise<IDish | null> {
    return await this.dishService.getDishById(id)
  }

  public async getDishByCategory(category: Categories): Promise<IDish[]> {
    return await this.dishService.getDishesByCategory(category)
  }
}
