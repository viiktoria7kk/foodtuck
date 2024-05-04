import { CommentService } from '../services/comment'
import { IComment } from '../models/Comment'
import { validateComment } from '../utils/validation/validation'

export class CommentController {
  private commentService: CommentService = new CommentService()

  public async createComment(comment: IComment): Promise<IComment> {
    const { error } = validateComment(comment)
    if (error) throw new Error(error.details[0].message)
    return await this.commentService.createComment(comment)
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

  public async getCommentByName(name: string): Promise<IComment[]> {
    return await this.commentService.getCommentByName(name)
  }
}
