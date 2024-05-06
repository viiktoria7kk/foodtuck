import { CheekoutService } from '../services/cheekout'
import { ICheekout } from '../models/Cheekout'
import { validateCheekout } from '../utils/validation/validation'
import { CreateCheekoutDto } from '../models/create.cheekout.dto'

export class CheekoutController {
  private cheekoutService = new CheekoutService()

  public async createCheekout(cheekout: CreateCheekoutDto): Promise<ICheekout> {
    const { error } = validateCheekout(cheekout)
    if (error) throw new Error(error.details[0].message)
    return await this.cheekoutService.createCheekout(cheekout)
  }

  public async getCheekout(): Promise<ICheekout[]> {
    return await this.cheekoutService.getCheekout()
  }

  public async getCheekoutById(id: string): Promise<ICheekout> {
    return await this.cheekoutService.getCheekoutById(id)
  }

  public async deleteCheekout(id: string): Promise<string> {
    return await this.cheekoutService.deleteCheekout(id)
  }

  public async getCheekoutByName(name: string): Promise<ICheekout[]> {
    return await this.cheekoutService.getCheekoutByName(name)
  }
}
