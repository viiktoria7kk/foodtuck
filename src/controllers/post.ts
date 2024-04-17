import { PostService } from '../services/post'
import { Request, Response } from 'express'

export class PostController {
  public async createPost(req: Request, res: Response): Promise<void> {
    try {
      const postService = new PostService()
      const newPost = await postService.createPost(req, res)
      res.status(201).json(newPost)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getPost(req: Request, res: Response): Promise<void> {
    try {
      const postService = new PostService()
      const posts = await postService.getPost(req, res)
      res.status(200).json(posts)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async updatePost(req: Request, res: Response): Promise<void> {
    try {
      const postService = new PostService()
      const updatedPost = await postService.updatePost(req, res)
      res.status(200).json(updatedPost)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async deletePost(req: Request, res: Response): Promise<void> {
    try {
      const postService = new PostService()
      await postService.deletePost(req, res)
      res.status(204).json()
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getPostById(req: Request, res: Response): Promise<void> {
    try {
      const postService = new PostService()
      const post = await postService.getPostById(req, res)
      res.status(200).json(post)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }
}
