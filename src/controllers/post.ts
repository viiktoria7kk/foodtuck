import { PostService } from '../services/post'
import { validatePost } from '../utils/validation/validation'
import { IPost } from 'src/models/Post'

export class PostController {
  constructor(private postService: PostService = new PostService()) {}

  public async createPost(post: IPost): Promise<IPost> {
    const { error } = validatePost(post)
    if (error) throw new Error(error.details[0].message)
    return await this.postService.createPost(post)
  }

  public async getPost(): Promise<IPost[]> {
    return await this.postService.getPost()
  }

  public async updatePost(post: IPost): Promise<IPost> {
    const { error } = validatePost(post)
    if (error) throw new Error(error.details[0].message)
    return await this.postService.updatePost(post)
  }

  public async deletePost(id: string): Promise<string> {
    return await this.postService.deletePost(id)
  }

  public async getPostById(id: string): Promise<IPost> {
    return await this.postService.getPostById(id)
  }
}
