import { Request, Response } from 'express'
import { TeamMemberService } from '../services/teamMember'
import { validateTeamMember } from '../utils/validation/validation'
import { ITeamMember } from '../models/TeamMember'

export class TeamMemberController {
  constructor(private teamMemberService: TeamMemberService = new TeamMemberService()) {}

  createTeamMember = async (req: Request, res: Response): Promise<void> => {
    try {
      const teamMember: ITeamMember = req.body
      const { error } = validateTeamMember(teamMember)
      if (error) throw new Error(error.details[0].message)
      const createdTeamMember = await this.teamMemberService.createTeamMember(teamMember)
      res.status(200).json(createdTeamMember)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  getTeamMember = async (req: Request, res: Response): Promise<void> => {
    try {
      const teamMembers = await this.teamMemberService.getTeamMember()
      res.status(200).json(teamMembers)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  getTeamMemberById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id
      const teamMember = await this.teamMemberService.getTeamMemberById(id)
      res.status(200).json(teamMember)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  deleteTeamMember = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id
      const message = await this.teamMemberService.deleteTeamMember(id)
      res.status(200).json({ message })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
