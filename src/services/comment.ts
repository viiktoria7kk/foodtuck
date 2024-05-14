import { CreateCommentDto } from '../models/create.comment.dto'
import { Comment } from '../models/Comment'
import { IComment } from '../models/Comment'
import { PostService } from './post'

export class CommentService {
  public async createComment(comment: CreateCommentDto): Promise<IComment> {
    try {
      const newComment = new Comment(comment)
      await newComment.save()
      const postService = new PostService()
      await postService.addCommentToPost(comment.postId, newComment.id)
      return newComment
    } catch (error) {
      throw error
    }
  }

  public async getComment(): Promise<IComment[]> {
    try {
      const comments = await Comment.find()
      return comments
    } catch (error) {
      throw error
    }
  }

  public async getCommentById(id: string): Promise<IComment> {
    try {
      const comment = await Comment.findById(id)
      return comment
    } catch (error) {
      throw error
    }
  }

  public async deleteComment(id: string): Promise<string> {
    try {
      await Comment.findByIdAndDelete(id)
      return 'Comment deleted successfully'
    } catch (error) {
      throw error
    }
  }
}
