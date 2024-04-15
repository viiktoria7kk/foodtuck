import { Router } from 'express'
import { UserController } from '../controllers/user'

export const userRouter = Router()
const userController = new UserController()

userRouter.post('/', userController.createUser)
userRouter.get('/', userController.getUser)
userRouter.get('/:id', userController.getUserById)
userRouter.put('/:id', userController.updateUser)
userRouter.delete('/:id', userController.deleteUser)
userRouter.get('em/:email', userController.getUserByEmail)
userRouter.post('/login', userController.loginUser)
userRouter.post('/register', userController.registerUser)
