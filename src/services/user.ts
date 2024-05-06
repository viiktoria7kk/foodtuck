import { IUser, User } from '../models/User'
import { generateToken } from '../utils/token/generateToken'
import { SignUpDto } from '../models/sign-up.dto'
import { SignInDto } from '../models/sign-in.dto'

export class UserService {
  public async getUser(): Promise<IUser[]> {
    try {
      const users = await User.find()
      return users.map((user) => user.toObject())
    } catch (error) {
      throw error
    }
  }

  public async updateUser(user: IUser): Promise<IUser> {
    try {
      const updatedUser = await User.findByIdAndUpdate(user.id, user, { new: true })
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

  public async signUp(user: SignUpDto): Promise<{ user: IUser; token: string }> {
    try {
      const newUser = new User(user)
      await newUser.save()
      const token = generateToken(newUser.id.toString())
      return { user: newUser.toObject(), token }
    } catch (error) {
      throw error
    }
  }

  public async signIn(user: SignInDto): Promise<{ user: IUser; token: string }> {
    try {
      const { email, password } = user
      const existingUser = await User.findOne({ email: email })
      if (!existingUser) {
        throw new Error('Invalid credentials')
      }
      const isMatch = await existingUser.matchPassword(password)
      if (!isMatch) {
        throw new Error('Invalid credentials')
      }
      const token = generateToken(existingUser.id.toString())
      return { user: existingUser.toObject(), token }
    } catch (error) {
      throw error
    }
  }
}
