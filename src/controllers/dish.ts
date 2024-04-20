import { Request, Response } from 'express'
import { DishService } from '../services/dish'
import { validateDish } from '../utils/validation'

export class DishController {
  public async createDish(req: Request, res: Response): Promise<void> {
    try {
      const { error } = validateDish(req.body)
      if (error) {
        res.status(400).json({ error: error.details[0].message })
        return
      }
      const dishService = new DishService()
      const newDish = await dishService.createDish(req, res)
      res.status(201).json(newDish)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getDish(req: Request, res: Response): Promise<void> {
    try {
      const dishService = new DishService()
      const dishes = await dishService.getDish(req, res)
      res.status(200).json(dishes)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async updateDish(req: Request, res: Response): Promise<void> {
    try {
      const { error } = validateDish(req.body)
      if (error) {
        res.status(400).json({ error: error.details[0].message })
        return
      }
      const dishService = new DishService()
      const updatedDish = await dishService.updateDish(req, res)
      res.status(200).json(updatedDish)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async deleteDish(req: Request, res: Response): Promise<void> {
    try {
      const dishService = new DishService()
      await dishService.deleteDish(req, res)
      res.status(204).json()
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getDishById(req: Request, res: Response): Promise<void> {
    try {
      const dishService = new DishService()
      const dish = await dishService.getDishById(req, res)
      res.status(200).json(dish)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getDishByCategory(req: Request, res: Response): Promise<void> {
    try {
      const dishService = new DishService()
      const dishes = await dishService.getDishByCategory(req, res)
      res.status(200).json(dishes)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }
}
