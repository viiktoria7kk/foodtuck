import { ChefService } from '../services/chef'
import { Request, Response } from 'express'

export class ChefController {
  public async createChef(req: Request, res: Response): Promise<void> {
    try {
      const chefService = new ChefService()
      const newChef = await chefService.createChef(req.body)
      res.status(201).json(newChef)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getChef(req: Request, res: Response): Promise<void> {
    try {
      const chefService = new ChefService()
      const chefs = await chefService.getChef()
      res.status(200).json(chefs)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }
  public async getChefById(req: Request, res: Response): Promise<void> {
    try {
      const chefService = new ChefService()
      const chef = await chefService.getChefById(req.params.id)
      res.status(200).json(chef)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async deleteChef(req: Request, res: Response): Promise<void> {
    try {
      const chefService = new ChefService()
      await chefService.deleteChef(req.params.id)
      res.status(204).json()
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getChefByName(req: Request, res: Response): Promise<void> {
    try {
      const chefService = new ChefService()
      const chef = await chefService.getChefByName(req.params.name)
      res.status(200).json(chef)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }
}
