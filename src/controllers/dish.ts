import { Request, Response } from 'express'
import { DishService } from '../services/dish'
import { validateDish } from '../utils/validation/validation'
import { IDish } from '../models/Dish'

export class DishController {
  constructor(private dishService: DishService = new DishService()) {}

  createDish = async (req: Request, res: Response) => {
    try {
      const dish: IDish = req.body
      const { error } = validateDish(dish)
      if (error) {
        return res.status(400).json({ message: error.details[0].message })
      }

      const createdDish = await this.dishService.createDish(dish)
      res.status(201).json(createdDish)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  getDish = async (req: Request, res: Response): Promise<void> => {
    try {
      const dishes = await this.dishService.getDish()
      res.status(200).json(dishes)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  updateDish = async (req: Request, res: Response): Promise<void> => {
    try {
      const dish: IDish = req.body
      const updatedDish = await this.dishService.updateDish(dish)
      res.status(200).json(updatedDish)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  deleteDish = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id
      const message = await this.dishService.deleteDish(id)
      res.status(200).json({ message })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  getDishById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id
      const dish = await this.dishService.getDishById(id)
      res.status(200).json(dish)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
