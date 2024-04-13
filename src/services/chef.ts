import { Chef } from '../models/Chef'
import { ChefType } from '../types/Chef'

export class ChefService {
  public async createChef(chef: ChefType): Promise<ChefType> {
    try {
      const newChef = new Chef(chef)
      await newChef.save()
      return newChef
    } catch (error) {
      throw error
    }
  }

  public async getChef(): Promise<ChefType[]> {
    try {
      const chefs = await Chef.find()
      return chefs
    } catch (error) {
      throw error
    }
  }

  public async getChefById(id: string): Promise<ChefType> {
    try {
      const chef = await Chef.findById(id)
      return chef
    } catch (error) {
      throw error
    }
  }

  public async deleteChef(id: string): Promise<void> {
    try {
      await Chef.findByIdAndDelete(id)
    } catch (error) {
      throw error
    }
  }

  public async getChefByName(name: string): Promise<ChefType[]> {
    try {
      const chefs = await Chef.find({ name: name })
      return chefs
    } catch (error) {
      throw error
    }
  }
}
