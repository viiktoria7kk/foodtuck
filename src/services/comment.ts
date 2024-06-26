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

  public async getComments(): Promise<IComment[]> {
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
      const comment = await Comment.findByIdAndDelete(id)
      const postService = new PostService()
      await postService.deleteCommentInPost(comment.postId, comment.id)
      await Comment.findByIdAndDelete(id)
      return 'Comment deleted'
    } catch (error) {
      throw error
    }
  }
}
