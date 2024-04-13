import { Router } from 'express'
import { UserController } from '../controllers/user'

export const router = Router()
const userController = new UserController()

router.post('/', userController.createUser)
router.get('/', userController.getUser)
router.get('/:id', userController.getUserById)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
