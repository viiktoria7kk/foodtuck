import { CommentService } from '../services/comment'
import { IComment } from '../models/Comment'
import { validateComment } from '../utils/validation/validation'
import { CreateCommentDto } from '../models/create.comment.dto'

export class CommentController {
  private commentService: CommentService = new CommentService()

  public async createComment(comment: CreateCommentDto): Promise<IComment> {
    try {
      const { error } = validateComment(comment)
      if (error) throw new Error(error.message)
      return await this.commentService.createComment(comment)
    } catch (error) {
      throw error
    }
  }

  public async getComment(): Promise<IComment[]> {
    return await this.commentService.getComment()
  }

  public async getCommentById(id: string): Promise<IComment> {
    return await this.commentService.getCommentById(id)
  }

  public async deleteComment(id: string): Promise<string> {
    return await this.commentService.deleteComment(id)
  }
}
