import { Request, Response } from 'express'
import { CreatePostDto } from '../models/create.post.dto'
import { PostService } from '../services/post'
import { validatePost } from '../utils/validation/validation'

export class PostController {
  private postService: PostService

  constructor() {
    this.postService = new PostService()
  }

  public createPost = async (req: Request, res: Response): Promise<void> => {
    try {
      const post: CreatePostDto = req.body
      const { error } = validatePost(post)
      if (error) {
        res.status(400).json({ message: error.details[0].message })
        return
      }
      const createdPost = await this.postService.createPost(post)
      res.status(201).json(createdPost)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  public getPosts = async (req: Request, res: Response): Promise<void> => {
    try {
      const posts = await this.postService.getPosts()
      res.status(200).json(posts)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  public deletePost = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id
      await this.postService.deletePost(id)
      res.status(200).json({ message: 'Post deleted successfully' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  public getPostById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id
      const post = await this.postService.getPostById(id)
      if (!post) {
        res.status(404).json({ message: 'Post not found' })
      } else {
        res.status(200).json(post)
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
