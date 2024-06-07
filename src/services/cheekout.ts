import { CreateCheekoutDto } from '../models/create.cheekout.dto'
import { Cheekout } from '../models/Cheekout'
import { ICheekout } from '../models/Cheekout'

export class CheekoutService {
  // public async createCheekout(cheekout: CreateCheekoutDto): Promise<ICheekout> {
  //   try {
  //     const newCheekout = new Cheekout(cheekout)
  //     await newCheekout.save()
  //     return newCheekout.toObject()
  //   } catch (error) {
  //     throw error
  //   }
  // }
  //add stripe

  public async getCheekout(): Promise<ICheekout[]> {
    try {
      const cheekouts = await Cheekout.find()
      return cheekouts.map((cheekout) => cheekout.toObject())
    } catch (error) {
      throw error
    }
  }

  public async getCheekoutById(id: string): Promise<ICheekout> {
    try {
      const cheekout = await Cheekout.findById(id)
      return cheekout.toObject()
    } catch (error) {
      throw error
    }
  }

  public async deleteCheekout(id: string): Promise<string> {
    try {
      await Cheekout.findByIdAndDelete(id)
      return 'Cheekout deleted successfully'
    } catch (error) {
      throw error
    }
  }

  public async getCheekoutByName(name: string): Promise<ICheekout[]> {
    try {
      const cheekouts = await Cheekout.find({ name: name })
      return cheekouts.map((cheekout) => cheekout.toObject())
    } catch (error) {
      throw error
    }
  }
}
