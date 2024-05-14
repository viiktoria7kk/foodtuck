import { Request, Response } from 'express'
import { CommentService } from '../services/comment'
import { validateComment } from '../utils/validation/validation'
import { CreateCommentDto } from '../models/create.comment.dto'
import { IComment } from '../models/Comment'

export class CommentController {
  private commentService: CommentService

  constructor() {
    this.commentService = new CommentService()
  }

  public createComment = async (req: Request, res: Response): Promise<void> => {
    try {
      const comment: CreateCommentDto = req.body
      const { error } = validateComment(comment)
      if (error) {
        res.status(400).json({ message: error.details[0].message })
        return
      }
      const createdComment = await this.commentService.createComment(comment)
      res.status(201).json(createdComment)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  public getComments = async (req: Request, res: Response): Promise<void> => {
    try {
      const comments = await this.commentService.getComments()
      res.status(200).json(comments)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  public deleteComment = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id
      await this.commentService.deleteComment(id)
      res.status(200).json({ message: 'Comment deleted successfully' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  public getCommentById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id
      const comment = await this.commentService.getCommentById(id)
      if (!comment) {
        res.status(404).json({ message: 'Comment not found' })
      } else {
        res.status(200).json(comment)
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
