import { IUser } from '../models/User'
import { SignUpDto } from '../models/sign-up.dto'
import { SignInDto } from '../models/sign-in.dto'
import { UserService } from '../services/user'
import { validateUser, validateSignUp, validateSignIn } from '../utils/validation/validation'

export class UserController {
  constructor(private userService: UserService = new UserService()) {}

  async getUser(): Promise<IUser[]> {
    return await this.userService.getUser()
  }

  async updateUser(user: IUser): Promise<IUser> {
    const { error } = validateUser(user)
    if (error) throw new Error(error.details[0].message)
    return await this.userService.updateUser(user)
  }

  async deleteUser(id: string): Promise<string> {
    return await this.userService.deleteUser(id)
  }

  async getUserById(id: string): Promise<IUser> {
    return await this.userService.getUserById(id)
  }

  async getUserByEmail(email: string): Promise<IUser> {
    return await this.userService.getUserByEmail(email)
  }

  async signUp(user: SignUpDto): Promise<{ user: IUser; token: string }> {
    const { error } = validateSignUp(user)
    if (error) throw new Error(error.details[0].message)
    return await this.userService.signUp(user)
  }

  async signIn(user: SignInDto): Promise<{ user: IUser; token: string }> {
    const { error } = validateSignIn(user)
    if (error) throw new Error(error.details[0].message)
    return await this.userService.signIn(user)
  }
}
