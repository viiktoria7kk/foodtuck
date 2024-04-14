import { CommentType } from '../types/Comment'
import { Comment } from '../models/Comment'

export class CommentService {
  public async createComment(comment: CommentType): Promise<CommentType> {
    try {
      const newComment = new Comment(comment)
      await newComment.save()
      return newComment
    } catch (error) {
      throw error
    }
  }

  public async getComment(): Promise<CommentType[]> {
    try {
      const comments = await Comment.find()
      return comments
    } catch (error) {
      throw error
    }
  }

  public async getCommentById(id: string): Promise<CommentType> {
    try {
      const comment = await Comment.findById(id)
      return comment
    } catch (error) {
      throw error
    }
  }

  public async deleteComment(id: string): Promise<void> {
    try {
      await Comment.findByIdAndDelete(id)
    } catch (error) {
      throw error
    }
  }

  public async getCommentByName(name: string): Promise<CommentType[]> {
    try {
      const comments = await Comment.find({ name: name })
      return comments
    } catch (error) {
      throw error
    }
  }

  public async updateCommentById(id: string, comment: CommentType): Promise<CommentType> {
    try {
      const updatedComment = await Comment.findByIdAndUpdate(id, comment, { new: true })
      return updatedComment
    } catch (error) {
      throw error
    }
  }
}
