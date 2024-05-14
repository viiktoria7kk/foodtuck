import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { SignUpDto } from '../models/sign-up.dto'
import { SignInDto } from '../models/sign-in.dto'
import { IUser, User } from '../models/User'
import { UpdateUserDto } from '../models/update.user.dto'

dotenv.config()

export class UserService {
  public async getUser(): Promise<IUser[]> {
    try {
      const users = await User.find()
      return users.map((user) => user.toObject())
    } catch (error) {
      throw error
    }
  }

  public async updateUser(user: UpdateUserDto): Promise<IUser> {
    try {
      const updatedUser = await User.findByIdAndUpdate({ _id: user.id }, user, { new: true })
      return updatedUser.toObject()
    } catch (error) {
      throw error
    }
  }

  public async deleteUser(id: string): Promise<string> {
    try {
      await User.findByIdAndDelete(id)
      return 'User deleted'
    } catch (error) {
      throw error
    }
  }

  public async getUserById(id: string): Promise<IUser> {
    try {
      const user = await User.findById(id)
      return user.toObject()
    } catch (error) {
      throw error
    }
  }

  public async getUserByEmail(email: string): Promise<IUser> {
    try {
      const user = await User.findOne({ email: email })
      return user.toObject()
    } catch (error) {
      throw error
    }
  }

  public async signUp(user: SignUpDto): Promise<{ token: string; refreshToken: string }> {
    try {
      const { password, ...userData } = user
      const hashedPassword = await bcrypt.hash(password, 10)

      const newUser = new User({ ...userData, password: hashedPassword })
      await newUser.save()

      const token = this.generateToken(newUser.id.toString())
      const refreshToken = this.generateRefreshToken(newUser.id.toString())
      return { token, refreshToken }
    } catch (error) {
      throw error
    }
  }

  public async signIn(user: SignInDto): Promise<{ token: string; refreshToken: string }> {
    try {
      const { email, password } = user
      const existingUser = await User.findOne({ email: email })
      if (!existingUser) {
        throw new Error('User not found')
      }
      const isMatch = await bcrypt.compare(password, existingUser.password)
      if (!isMatch) {
        throw new Error('Incorrect password')
      }
      const token = this.generateToken(existingUser.id.toString())
      const refreshToken = this.generateRefreshToken(existingUser.id.toString())
      return { token, refreshToken }
    } catch (error) {
      throw error
    }
  }

  private generateToken(id: string): string {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, {
      expiresIn: '30d',
    })
  }

  private generateRefreshToken(id: string): string {
    return jwt.sign({ id }, process.env.JWT_REFRESH_SECRET as string, {
      expiresIn: '30d',
    })
  }
}
