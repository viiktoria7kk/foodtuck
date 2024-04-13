import { Request, Response } from 'express'
import { Category } from '../models/Category'
import { CategoryType } from '../types/Category'

export class CategoryService {
  public async createCategory(req: Request, res: Response): Promise<Response> {
    try {
      const category: CategoryType = req.body
      const newCategory = new Category(category)
      await newCategory.save()
      return res.status(201).json(newCategory)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async getCategory(req: Request, res: Response): Promise<Response> {
    try {
      const categories = await Category.find()
      return res.status(200).json(categories)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async updateCategory(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const category = await Category.findByIdAndUpdate({ _id: id }, req.body, { new: true })
      return res.status(200).json(category)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async deleteCategory(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      await Category.findByIdAndDelete({ _id: id })
      return res.status(204).json()
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async getCategoryById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const category = await Category.findById({ _id: id })
      return res.status(200).json(category)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async getCategoryByValue(req: Request, res: Response): Promise<Response> {
    try {
      const { dish } = req.params
      const category = await Category.find({ dish: dish })
      return res.status(200).json(category)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
