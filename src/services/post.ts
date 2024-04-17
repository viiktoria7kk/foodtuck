import { Request, Response } from 'express'
import { IPost } from '../models/Post'
import { Post } from '../models/Post'

export class PostService {
  public async createPost(req: Request, res: Response): Promise<IPost> {
    const { img, title, description, text } = req.body
    const newPost = new Post({ img, title, description, text })
    await newPost.save()
    return newPost
  }

  public async getPost(req: Request, res: Response): Promise<IPost[]> {
    const posts = await Post.find()
    return posts
  }

  public async updatePost(req: Request, res: Response): Promise<IPost> {
    const { id } = req.params
    const { img, title, description, text } = req.body
    const updatedPost = await Post.findByIdAndUpdate(id, { img, title, description, text }, { new: true })
    return updatedPost
  }

  public async deletePost(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    await Post.findByIdAndDelete(id)
  }

  public async getPostById(req: Request, res: Response): Promise<IPost> {
    const { id } = req.params
    const post = await Post.findById(id)
    return post
  }
}
