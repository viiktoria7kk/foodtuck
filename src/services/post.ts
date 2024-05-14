import { Types } from 'mongoose'
import { CreatePostDto } from '../models/create.post.dto'
import { IPost } from '../models/Post'
import { Post } from '../models/Post'

export class PostService {
  public async createPost(post: CreatePostDto): Promise<IPost> {
    try {
      const newPost = new Post(post)
      await newPost.save()
      return newPost
    } catch (error) {
      throw error
    }
  }

  public async getPosts(): Promise<IPost[]> {
    try {
      const posts = await Post.find()
      return posts
    } catch (error) {
      throw error
    }
  }

  public async deletePost(id: string): Promise<string> {
    try {
      await Post.findByIdAndDelete(id)
      return 'Post deleted'
    } catch (error) {
      throw error
    }
  }

  public async getPostById(id: string): Promise<IPost> {
    try {
      const post = await Post.findById(id)
      return post
    } catch (error) {
      throw error
    }
  }

  public async addCommentToPost(postId: Types.ObjectId, commentId: Types.ObjectId): Promise<IPost> {
    try {
      const post = await Post.findById(postId)
      post.comments.push(commentId)
      await post.save()
      return post
    } catch (error) {
      throw error
    }
  }
}
