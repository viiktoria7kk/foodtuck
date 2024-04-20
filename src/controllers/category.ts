import { CategoryService } from '../services/category'
import { Request, Response } from 'express'
import { validateCategory } from '../utils/validation'

export class CategoryController {
  public async createCategory(req: Request, res: Response): Promise<void> {
    try {
      const { error } = validateCategory(req.body)
      if (error) {
        res.status(400).json({ error: error.details[0].message })
        return
      }
      const categoryService = new CategoryService()
      const newCategory = await categoryService.createCategory(req, res)
      res.status(201).json(newCategory)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getCategory(req: Request, res: Response): Promise<void> {
    try {
      const categoryService = new CategoryService()
      const categories = await categoryService.getCategory(req, res)
      res.status(200).json(categories)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async updateCategory(req: Request, res: Response): Promise<void> {
    try {
      const { error } = validateCategory(req.body)
      if (error) {
        res.status(400).json({ error: error.details[0].message })
        return
      }
      const categoryService = new CategoryService()
      const updatedCategory = await categoryService.updateCategory(req, res)
      res.status(200).json(updatedCategory)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async deleteCategory(req: Request, res: Response): Promise<void> {
    try {
      const categoryService = new CategoryService()
      await categoryService.deleteCategory(req, res)
      res.status(204).json()
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getCategoryById(req: Request, res: Response): Promise<void> {
    try {
      const categoryService = new CategoryService()
      const category = await categoryService.getCategoryById(req, res)
      res.status(200).json(category)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getCategoryByValue(req: Request, res: Response): Promise<void> {
    try {
      const categoryService = new CategoryService()
      const category = await categoryService.getCategoryByValue(req, res)
      res.status(200).json(category)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }
}
