import { Router } from 'express'
import { ChefController } from '../controllers/chef'

export const chefRouter = Router()
const chefController = new ChefController()

chefRouter.post('/', chefController.createChef)
chefRouter.get('/', chefController.getChef)
chefRouter.get('/:id', chefController.getChefById)
chefRouter.delete('/:id', chefController.deleteChef)
chefRouter.get('/name/:name', chefController.getChefByName)
