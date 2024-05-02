import { TeamMemberService } from '../services/teamMember'
import { Request, Response } from 'express'
import { validateTeamMember } from '../utils/validation/validation'

export class TeamMemberController {
  public async createTeamMember(req: Request, res: Response): Promise<void> {
    try {
      const { error } = validateTeamMember(req.body)
      if (error) {
        res.status(400).json({ error: error.details[0].message })
        return
      }
      const teamMemberService = new TeamMemberService()
      const teamMember = await teamMemberService.createTeamMember(req.body)
      res.status(201).json(teamMember)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getTeamMember(req: Request, res: Response): Promise<void> {
    try {
      const teamMemberService = new TeamMemberService()
      const teamMembers = await teamMemberService.getTeamMember()
      res.status(200).json(teamMembers)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }
  
  public async getTeamMemberById(req: Request, res: Response): Promise<void> {
    try {
      const teamMemberService = new TeamMemberService()
      const teamMember = await teamMemberService.getTeamMemberById(req.params.id)
      res.status(200).json(teamMember)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async deleteTeamMember(req: Request, res: Response): Promise<void> {
    try {
      const teamMemberService = new TeamMemberService()
      await teamMemberService.deleteTeamMember(req.params.id)
      res.status(204).json()
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }

  public async getTeamMemberByName(req: Request, res: Response): Promise<void> {
    try {
      const teamMemberService = new TeamMemberService()
      const teamMember = await teamMemberService.getTeamMemberByName(req.params.name)
      res.status(200).json(teamMember)
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: error.message })
      }
    }
  }
}