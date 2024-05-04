import { IPost } from '../models/Post'
import { Post } from '../models/Post'

export class PostService {
  public async createPost(post: IPost): Promise<IPost> {
    try {
      const newPost = new Post(post)
      await newPost.save()
      return newPost
    } catch (error) {
      throw error
    }
  }

  public async getPost(): Promise<IPost[]> {
    try {
      const posts = await Post.find()
      return posts
    } catch (error) {
      throw error
    }
  }

  public async updatePost(post: IPost): Promise<IPost> {
    try {
      const updatedPost = await Post.findByIdAndUpdate(post.id, post, { new: true })
      return updatedPost
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
}
