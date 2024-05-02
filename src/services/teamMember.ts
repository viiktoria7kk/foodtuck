import { TeamMember } from '../models/TeamMember'
import { TeamMemberType } from '../types/TeamMember'

export class TeamMemberService {
  public async createTeamMember(teamMember: TeamMemberType): Promise<TeamMemberType> {
    try {
      const newTeamMember = new TeamMember(teamMember)
      await newTeamMember.save()
      return newTeamMember
    } catch (error) {
      throw error
    }
  }

  public async getTeamMember(): Promise<TeamMemberType[]> {
    try {
      const teamMembers = await TeamMember.find()
      return teamMembers
    } catch (error) {
      throw error
    }
  }

  public async getTeamMemberById(id: string): Promise<TeamMemberType> {
    try {
      const teamMember = await TeamMember.findById(id)
      return teamMember
    } catch (error) {
      throw error
    }
  }

  public async deleteTeamMember(id: string): Promise<void> {
    try {
      await TeamMember.findByIdAndDelete(id)
    } catch (error) {
      throw error
    }
  }

  public async getTeamMemberByName(name: string): Promise<TeamMemberType[]> {
    try {
      const teamMembers = await TeamMember.find({ name: name })
      return teamMembers
    } catch (error) {
      throw error
    }
  }
}
