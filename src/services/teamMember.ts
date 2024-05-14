import { TeamMember } from '../models/TeamMember'
import { ITeamMember } from '../models/TeamMember'

export class TeamMemberService {
  public async createTeamMember(teamMember: ITeamMember): Promise<ITeamMember> {
    try {
      const newTeamMember = new TeamMember(teamMember)
      await newTeamMember.save()
      return newTeamMember
    } catch (error) {
      throw error
    }
  }

  public async getTeamMember(): Promise<ITeamMember[]> {
    try {
      const teamMembers = await TeamMember.find()
      return teamMembers
    } catch (error) {
      throw error
    }
  }

  public async getTeamMemberById(id: string): Promise<ITeamMember> {
    try {
      const teamMember = await TeamMember.findById(id)
      return teamMember
    } catch (error) {
      throw error
    }
  }

  public async deleteTeamMember(id: string): Promise<string> {
    try {
      await TeamMember.findByIdAndDelete(id)
      return 'Team member deleted'
    } catch (error) {
      throw error
    }
  }
}
