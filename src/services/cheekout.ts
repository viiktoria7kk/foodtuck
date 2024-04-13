import { Cheekout } from '../models/Cheekout'
import { CheekoutType } from '../types/Cheekout'

export class CheekoutService {
  public async createCheekout(cheekout: CheekoutType): Promise<CheekoutType> {
    try {
      const newCheekout = new Cheekout(cheekout)
      await newCheekout.save()
      return newCheekout
    } catch (error) {
      throw error
    }
  }

  public async getCheekout(): Promise<CheekoutType[]> {
    try {
      const cheekouts = await Cheekout.find()
      return cheekouts
    } catch (error) {
      throw error
    }
  }

  public async getCheekoutById(id: string): Promise<CheekoutType> {
    try {
      const cheekout = await Cheekout.findById(id)
      return cheekout
    } catch (error) {
      throw error
    }
  }

  public async deleteCheekout(id: string): Promise<void> {
    try {
      await Cheekout.findByIdAndDelete(id)
    } catch (error) {
      throw error
    }
  }

  public async getCheekoutByName(name: string): Promise<CheekoutType[]> {
    try {
      const cheekouts = await Cheekout.find({ name: name })
      return cheekouts
    } catch (error) {
      throw error
    }
  }

  public async updateCheekoutById(id: string, cheekout: CheekoutType): Promise<CheekoutType> {
    try {
      await Cheekout.findByIdAndUpdate(id, cheekout)
      return cheekout
    } catch (error) {
      throw error
    }
  }
}
