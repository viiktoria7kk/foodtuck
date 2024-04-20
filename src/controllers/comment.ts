import { CommentService } from "../services/comment";
import { Request, Response } from "express";
import { validateComment } from "../utils/validation";


export class CommentController {
  private commentService: CommentService = new CommentService();

  public createComment = async (req: Request, res: Response): Promise<void> => {
    try {
      const { error } = validateComment(req.body);
      if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
      }
      const comment = req.body;
      const newComment = await this.commentService.createComment(comment);
      res.status(201).json(newComment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  public getComment = async (req: Request, res: Response): Promise<void> => {
    try {
      const comments = await this.commentService.getComment();
      res.status(200).json(comments);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  public getCommentById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const comment = await this.commentService.getCommentById(id);
      res.status(200).json(comment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  public deleteComment = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      await this.commentService.deleteComment(id);
      res.status(200).json({ message: "Comment deleted" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  public getCommentByName = async (req: Request, res: Response): Promise<void> => {
    try {
      const name = req.params.name;
      const comments = await this.commentService.getCommentByName(name);
      res.status(200).json(comments);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  public updateCommentById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { error } = validateComment(req.body);
      if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
      }
      const id = req.params.id;
      const comment = req.body;
      const updatedComment = await this.commentService.updateCommentById(id, comment);
      res.status(200).json(updatedComment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}