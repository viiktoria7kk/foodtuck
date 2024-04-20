import { CheekoutService } from '../services/cheekout'
import { Request, Response } from 'express'
import { validateCheekout } from '../utils/validation'

export class CheekoutController {
  private cheekoutService = new CheekoutService()

  public createCheekout = async (req: Request, res: Response): Promise<void> => {
    try {
      const { error } = validateCheekout(req.body)
      if (error) {
        res.status(400).json({ error: error.details[0].message })
        return
      }
      const cheekout = req.body
      const newCheekout = await this.cheekoutService.createCheekout(cheekout)
      res.status(201).json({ data: newCheekout, message: 'created' })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  public getCheekout = async (req: Request, res: Response): Promise<void> => {
    try {
      const cheekouts = await this.cheekoutService.getCheekout()
      res.status(200).json({ data: cheekouts })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  public getCheekoutById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id
      const cheekout = await this.cheekoutService.getCheekoutById(id)
      res.status(200).json({ data: cheekout })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  public deleteCheekout = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id
      await this.cheekoutService.deleteCheekout(id)
      res.status(200).json({ message: 'deleted' })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  public getCheekoutByName = async (req: Request, res: Response): Promise<void> => {
    try {
      const name = req.params.name
      const cheekouts = await this.cheekoutService.getCheekoutByName(name)
      res.status(200).json({ data: cheekouts })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  public updateCheekoutById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { error } = validateCheekout(req.body)
      if (error) {
        res.status(400).json({ error: error.details[0].message })
        return
      }
      const id = req.params.id
      const cheekout = req.body
      const updatedCheekout = await this.cheekoutService.updateCheekoutById(id, cheekout)
      res.status(200).json({ data: updatedCheekout, message: 'updated' })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}
