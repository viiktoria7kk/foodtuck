import { Router } from 'express'
import { CategoryController } from '../controllers/category'

export const categoryRouter = Router()
const categoryController = new CategoryController()

categoryRouter.post('/', categoryController.createCategory)
categoryRouter.get('/', categoryController.getCategory)
categoryRouter.get('/:id', categoryController.getCategoryById)
categoryRouter.put('/:id', categoryController.updateCategory)
categoryRouter.delete('/:id', categoryController.deleteCategory)
categoryRouter.get('/value/:value', categoryController.getCategoryByValue)
