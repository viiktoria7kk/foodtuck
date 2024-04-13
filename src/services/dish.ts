import { Request, Response } from 'express'
import { Dish } from '../models/Dish'
import { DishType } from '../types/Dish'

export class DishService {
  public async createDish(req: Request, res: Response): Promise<Response> {
    try {
      const dish: DishType = req.body
      const newDish = new Dish(dish)
      await newDish.save()
      return res.status(201).json(newDish)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async getDish(req: Request, res: Response): Promise<Response> {
    try {
      const dishes = await Dish.find()
      return res.status(200).json(dishes)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async updateDish(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const dish = await Dish.findByIdAndUpdate({ _id: id }, req.body, { new: true })
      return res.status(200).json(dish)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async deleteDish(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      await Dish.findByIdAndDelete({ _id: id })
      return res.status(204).json()
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async getDishById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const dish = await Dish.findById({ _id: id })
      return res.status(200).json(dish)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
