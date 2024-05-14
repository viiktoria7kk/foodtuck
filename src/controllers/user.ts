import { Request, Response } from 'express'
import { SignUpDto } from '../models/sign-up.dto'
import { SignInDto } from '../models/sign-in.dto'
import { UserService } from '../services/user'
import { validateSignUp, validateSignIn } from '../utils/validation/validation' // Import validation functions

export class UserController {
  private userService: UserService

  constructor() {
    this.userService = new UserService()
  }

  getUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await this.userService.getUser()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = req.body
      const updatedUser = await this.userService.updateUser(user)
      res.status(200).json(updatedUser)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id
      const message = await this.userService.deleteUser(id)
      res.status(200).json({ message })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id
      const user = await this.userService.getUserById(id)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  getUserByEmail = async (req: Request, res: Response): Promise<void> => {
    try {
      const email: string = req.params.email
      const user = await this.userService.getUserByEmail(email)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  signUp = async (req: Request, res: Response): Promise<void> => {
    try {
      const user: SignUpDto = req.body
      const { error } = validateSignUp(user)
      if (error) {
        res.status(400).json({ message: error.details[0].message })
        return
      }
      const { token, refreshToken } = await this.userService.signUp(user)
      res.status(200).json({ token, refreshToken })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  signIn = async (req: Request, res: Response): Promise<void> => {
    try {
      const user: SignInDto = req.body
      const { error } = validateSignIn(user)
      if (error) {
        res.status(400).json({ message: error.details[0].message })
        return
      }
      const { token, refreshToken } = await this.userService.signIn(user)
      res.status(200).json({ token, refreshToken })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
