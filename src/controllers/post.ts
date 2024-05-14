import { CreatePostDto } from '../models/create.post.dto'
import { PostService } from '../services/post'
import { validatePost } from '../utils/validation/validation'
import { IPost } from '../models/Post'

export class PostController {
  private postService: PostService = new PostService()

  public createPost = async (post: CreatePostDto): Promise<IPost> => {
    const { error } = validatePost(post)
    if (error) throw new Error(error.details[0].message)
    return await this.postService.createPost(post)
  }

  public getPost = async (): Promise<IPost[]> => {
    return await this.postService.getPost()
  }

  public deletePost = async (id: string): Promise<string> => {
    return await this.postService.deletePost(id)
  }

  public getPostById = async (id: string): Promise<IPost> => {
    return await this.postService.getPostById(id)
  }
}
