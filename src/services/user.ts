import { Request, Response } from 'express'
import { User } from '../models/User'
import { UserType } from '../types/User'
import { generateToken } from '../utils/generateToken'

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

  public async loginUser(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        email,
      })
      if (user && (await user.matchPassword(password))) {
        return res.status(200).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user.id),
        })
      } else {
        return res.status(401).json({ message: 'Invalid email or password' })
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  public async registerUser(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body
      const userExists = await User.findOne({
        email,
      })
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' })
      }
      const user = await User.create({
        name,
        email,
        password,
      })
      if (user) {
        return res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user.id),
        })
      } else {
        return res.status(400).json({ message: 'Invalid user data' })
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
