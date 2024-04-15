import { Request, Response } from 'express'
import { UserService } from '../services/user'

export class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const userService = new UserService()
      const newUser = await userService.createUser(req, res)
      res.status(201).json(newUser)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getUser(req: Request, res: Response): Promise<void> {
    try {
      const userService = new UserService()
      const users = await userService.getUser(req, res)
      res.status(200).json(users)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userService = new UserService()
      const updatedUser = await userService.updateUser(req, res)
      res.status(200).json(updatedUser)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userService = new UserService()
      await userService.deleteUser(req, res)
      res.status(204).json()
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userService = new UserService()
      const user = await userService.getUserById(req, res)
      res.status(200).json(user)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getUserByEmail(req: Request, res: Response): Promise<void> {
    try {
      const userService = new UserService()
      const user = await userService.getUserByEmail(req, res)
      res.status(200).json(user)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async loginUser(req: Request, res: Response): Promise<void> {
    try {
      const userService = new UserService()
      const user = await userService.loginUser(req, res)
      res.status(200).json(user)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async registerUser(req: Request, res: Response): Promise<void> {
    try {
      const userService = new UserService()
      const user = await userService.registerUser(req, res)
      res.status(200).json(user)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }
}
