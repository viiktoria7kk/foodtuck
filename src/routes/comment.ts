import { Router } from 'express'
import { CommentController } from '../controllers/comment'

export const commentRouter = Router()
const commentController = new CommentController()

commentRouter.post('/', commentController.createComment)
commentRouter.get('/', commentController.getComment)
commentRouter.get('/:id', commentController.getCommentById)
commentRouter.delete('/:id', commentController.deleteComment)
commentRouter.get('/name/:name', commentController.getCommentByName)
commentRouter.put('/:id', commentController.updateCommentById)
