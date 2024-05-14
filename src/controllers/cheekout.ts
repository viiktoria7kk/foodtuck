import { Request, Response } from 'express'
import { CheekoutService } from '../services/cheekout'
import { validateCheekout } from '../utils/validation/validation'
import { CreateCheekoutDto } from '../models/create.cheekout.dto'
import { ICheekout } from '../models/Cheekout'

export class CheekoutController {
  private cheekoutService: CheekoutService

  constructor() {
    this.cheekoutService = new CheekoutService()
  }

  createCheekout = async (req: Request, res: Response): Promise<void> => {
    try {
      const cheekoutData: CreateCheekoutDto = req.body
      const { error } = validateCheekout(cheekoutData)
      if (error) {
        res.status(400).json({ message: error.details[0].message })
        return
      }
      const createdCheekout: ICheekout = await this.cheekoutService.createCheekout(cheekoutData)
      res.status(201).json(createdCheekout)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  getCheekout = async (req: Request, res: Response): Promise<void> => {
    try {
      const cheekouts: ICheekout[] = await this.cheekoutService.getCheekout()
      res.status(200).json(cheekouts)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  getCheekoutById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id
      const cheekout: ICheekout = await this.cheekoutService.getCheekoutById(id)
      res.status(200).json(cheekout)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  deleteCheekout = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id
      const message: string = await this.cheekoutService.deleteCheekout(id)
      res.status(200).json({ message })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  getCheekoutByName = async (req: Request, res: Response): Promise<void> => {
    try {
      const name: string = req.params.name
      const cheekouts: ICheekout[] = await this.cheekoutService.getCheekoutByName(name)
      res.status(200).json(cheekouts)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
