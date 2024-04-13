import { Request, Response } from 'express'
import { User } from '../models/User'
import { UserType } from '../types/User'

export class UserService {
  public async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const user: UserType = req.body
      const newUser = new User(user)
      await newUser.save()
      return res.status(201).json(newUser)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async getUser(req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find()
      return res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const user = await User.findByIdAndUpdate({ _id: id }, req.body, { new: true })
      return res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      await User.findByIdAndDelete({ _id: id })
      return res.status(204).json()
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const user = await User.findById({ _id: id })
      return res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async getUserByEmail(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.body
      const user = await User.findOne({
        email,
      })
      return res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
