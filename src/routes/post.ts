import { Router } from 'express'
import { PostController } from '../controllers/post'

export const postRouter = Router()
const postController = new PostController()

postRouter.post('/', postController.createPost)
postRouter.get('/', postController.getPost)
postRouter.get('/:id', postController.getPostById)
postRouter.put('/:id', postController.updatePost)
postRouter.delete('/:id', postController.deletePost)
